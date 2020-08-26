from django.contrib import admin
from .models import Book, Author, Sale, SystemNotification, PersonalNotification, SystemNotificationRead

class BookAdmin(admin.ModelAdmin):
    model = Book
    list_display = ('article_number', 'name', 'author')


class AuthorAdmin(admin.ModelAdmin):
    model = Author
    list_display = ('id', 'first_name', 'last_name', 'middle_name')


class SaleAdmin(admin.ModelAdmin):
    model = Sale
    list_display = ('id', 'article_number', 'date')


class SystemNotificationReadAdmin(admin.ModelAdmin):
    model = SystemNotificationRead
    list_display = ('id', 'user', 'note')

class SystemNotificationAdmin(admin.ModelAdmin):
    model = SystemNotification
    list_display = ('id', 'message', 'date')


class PersonalNotificationAdmin(admin.ModelAdmin):
    model = PersonalNotification
    list_display = ('id', 'message', 'date', 'is_read')


admin.site.register(Book, BookAdmin)
admin.site.register(Author, AuthorAdmin)
admin.site.register(Sale, SaleAdmin)
admin.site.register(SystemNotification, SystemNotificationAdmin)
admin.site.register(PersonalNotification, PersonalNotificationAdmin)
admin.site.register(SystemNotificationRead, SystemNotificationReadAdmin)