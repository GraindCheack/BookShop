from app_book.models import Sale, Book, Author, PersonalNotification, SystemNotification, SystemNotificationRead
from .serializers import BookListSerializer, AuthorSoldSerializer, PersonalNotificationSerilizer, SystemNotificationSerializer, SystemNotificationReadSerializer
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import mixins, viewsets, generics
from datetime import date
from django_filters.rest_framework import DjangoFilterBackend
import unicodecsv
from django.http import HttpResponse
from rest_framework import filters


class BookListView(mixins.ListModelMixin,
                   mixins.CreateModelMixin,
                   viewsets.GenericViewSet
                   ):
    serializer_class = BookListSerializer
    queryset = Book.objects.all()
    filter_backends = (DjangoFilterBackend, filters.SearchFilter, filters.OrderingFilter)
    search_fields = ['name', 'article_number', 'author__first_name']
    ordering_fields = ['name', 'article_number', 'author__first_name']

    def create(self, request, *args, **kwargs):
        if request.user.is_authenticated:
            serializer = BookListSerializer(data=request.data)  # read_only=True
            serializer.is_valid(raise_exception=True)
            serializer.save()
            return Response(serializer.data)
        else:
            return HttpResponse(status=401)


@api_view(['GET'])
def AmountView(request):
    """ Return amount of sold books"""
    amount = Sale.objects.all().count()
    return Response({"number": amount}, status=200)


@api_view(['GET'])
def CurrentYearView(request):
    """ Returns monthly sold books of current year"""
    date_now = date.today()
    month = 1
    sold_books = {}
    while month <= 12:
        sold_books[month] = Sale.objects.filter(date__year=date_now.year,
                                                date__month=month).count()
        month += 1
    return Response(sold_books, status=200)


@api_view(['GET'])
def LastMonthView(request):
    """ Returns sales of previous month"""
    last_month = date.today().month - 1
    sold_books = Sale.objects.filter(date__month=last_month).count()
    return Response({"number": sold_books}, status=200)


def CSVBooksView(request):
    if request.user.is_authenticated:
        response = HttpResponse(content_type='text/csv')
        response['Content-Type'] = 'application/x-download';
        response['Content-Disposition'] = 'attachment; filename="Books.csv"'
        writer = unicodecsv.writer(response, delimiter=';', encoding='utf-8-sig')
        writer.writerow(['Название', 'Артикул', 'Автор'])
        for book in Book.objects.all():
            writer.writerow([book.name, book.article_number, f'{book.author.first_name} '
                                                             f'{book.author.middle_name} '
                                                             f'{book.author.last_name}'])
        return response
    else:
        return HttpResponse(status=401)


class AuthorSoldBooksView(mixins.ListModelMixin,
                          mixins.CreateModelMixin,
                          viewsets.GenericViewSet):
    """ For statistics of sold books by authors"""
    queryset = Author.objects.all()
    serializer_class = AuthorSoldSerializer
    filter_backends = [DjangoFilterBackend]
    filterset_fields = ('first_name', 'last_name', 'middle_name')


@api_view(['GET'])
def SystemNotificationView(request):
    notes = SystemNotification.objects.exclude(users_read=request.user).order_by('-date')
    serializer = SystemNotificationSerializer(notes, many=True)
    return Response(serializer.data)


class SystemNotificationReadView(mixins.CreateModelMixin,
                          viewsets.GenericViewSet):
    queryset = SystemNotificationRead.objects.all()
    serializer_class = SystemNotificationReadSerializer

    def create(self, request, *args, **kwargs):
        request.data["user"] = request.user.id
        return super().create(request, *args, **kwargs)


@api_view(['GET'])
def PersonalNotificationView(request):
    read_notes = PersonalNotification.objects.filter(user=request.user, is_read=True).order_by('-date')[:5]
    not_read_notes = PersonalNotification.objects.filter(user=request.user, is_read=False).order_by('-date')
    return Response({
        'read': PersonalNotificationSerilizer(read_notes, many=True).data,
        'not_read': PersonalNotificationSerilizer(not_read_notes, many=True).data
    })

@api_view(['PUT'])
def PersonalNotificationReadView(request):
    note = PersonalNotification.objects.filter(id=request.data['id']).first()
    serializer = PersonalNotificationSerilizer(note, data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data)
    return Response(serializer.errors, status=400)

""" class PersonalNotificationReadView(mixins.UpdateModelMixin,
                          viewsets.GenericViewSet):
    queryset = PersonalNotification.objects.all()
    serializer_class = PersonalNotificationSerilizer

    def update(self, request, *args, **kwargs):
        return super().update(request, *args, **kwargs)
 """
    
