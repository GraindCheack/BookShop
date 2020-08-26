from django.urls import path
from .views import AmountView, BookListView, CurrentYearView, LastMonthView, AuthorSoldBooksView, CSVBooksView, \
    SystemNotificationView, SystemNotificationReadView, PersonalNotificationView, PersonalNotificationReadView


urlpatterns = [
    path('amount/', AmountView),
    path('book_list/', BookListView.as_view({'get': 'list', 'post': 'create'})),
    path('current_year/', CurrentYearView),
    path('last_month/', LastMonthView),
    path('authors/', AuthorSoldBooksView.as_view({'get': 'list'})),
    path('system_notice/', SystemNotificationView),
    path('read_system_notice/', SystemNotificationReadView.as_view({'post': 'create'})),
    path('personal_notice/', PersonalNotificationView),
    path('read_personal_notice/', PersonalNotificationReadView),
    path('', CSVBooksView)
]