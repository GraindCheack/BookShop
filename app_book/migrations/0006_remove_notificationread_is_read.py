# Generated by Django 3.1 on 2020-08-20 14:05

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('app_book', '0005_auto_20200820_1625'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='notificationread',
            name='is_read',
        ),
    ]