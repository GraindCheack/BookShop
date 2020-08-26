from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from .models import CustomUser, CustomUserManager


class CustomUserAdmin(admin.ModelAdmin):
    model = CustomUser
    list_display = ('id', 'email',)
    

admin.site.register(CustomUser, CustomUserAdmin)