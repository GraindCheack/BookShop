from django.db import models
from datetime import date
from django.utils import timezone
from app_user.models import CustomUser


class Book(models.Model):
    class Meta:
        ordering = ['article_number']
        verbose_name_plural = 'Книги'
        verbose_name = 'Книга'

    article_number = models.CharField(max_length=100, primary_key=True)
    name = models.CharField(max_length=100)
    author = models.ForeignKey('Author', on_delete=models.CASCADE)


class Author(models.Model):
    class Meta:
        verbose_name_plural = 'Авторы'
        verbose_name = 'Автор'
    first_name = models.CharField(max_length=30)
    last_name = models.CharField(max_length=30)
    middle_name = models.CharField(max_length=30)


class Sale(models.Model):
    class Meta:
        verbose_name_plural = 'Проданные книги'
        verbose_name = 'Проданная книга'

    article_number = models.ForeignKey('Book', on_delete=models.CASCADE)
    date = models.DateField(default=date.today())


class Notification(models.Model):    
    message = models.TextField(blank=True, null=True)
    date = models.DateField(default=timezone.now())

    def __str__(self):
        return self.message

    class Meta:
        abstract = True


class SystemNotificationRead(models.Model):
    class Meta:
        verbose_name_plural = 'Прочитанные общесистемные нотификации'
        verbose_name = 'Прочитанная общесистемная нотификация'
        unique_together = ['user', 'note']

    user = models.ForeignKey(CustomUser, on_delete=models.CASCADE)
    note = models.ForeignKey('SystemNotification', on_delete=models.CASCADE)


class SystemNotification(Notification):
    class Meta:
        verbose_name_plural = 'Общесистемные нотификации'
        verbose_name = 'Общесистемная нотификация'

    users_read = models.ManyToManyField(CustomUser, through=SystemNotificationRead)

    def __str__(self):
        return self.message
    

class PersonalNotification(Notification):
    class Meta:
        verbose_name_plural = 'Персональные нотификации'
        verbose_name = 'Персональная нотификация'

    user = models.ForeignKey(CustomUser, on_delete=models.CASCADE)
    is_read = models.BooleanField(default=False)

    def __str__(self):
        return self.message

