# Generated by Django 3.0.8 on 2020-08-22 18:03

import datetime
from django.db import migrations, models
from django.utils.timezone import utc


class Migration(migrations.Migration):

    dependencies = [
        ('app_book', '0009_auto_20200822_1956'),
    ]

    operations = [
        migrations.RenameField(
            model_name='systemnotificationread',
            old_name='notes',
            new_name='note',
        ),
        migrations.RenameField(
            model_name='systemnotificationread',
            old_name='users',
            new_name='user',
        ),
        migrations.AlterField(
            model_name='personalnotification',
            name='date',
            field=models.DateField(default=datetime.datetime(2020, 8, 22, 18, 3, 7, 286750, tzinfo=utc)),
        ),
        migrations.AlterField(
            model_name='systemnotification',
            name='date',
            field=models.DateField(default=datetime.datetime(2020, 8, 22, 18, 3, 7, 286750, tzinfo=utc)),
        ),
    ]
