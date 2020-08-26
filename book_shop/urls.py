from django.contrib import admin
from django.urls import path, re_path, include
from django.views.generic import RedirectView

urlpatterns = [
    path('admin/', admin.site.urls),
    path('books/', include('app_book.urls')),
    path('users/', include('django.contrib.auth.urls')),
    path('users/', include("app_user.urls")),
    path('home/', include('frontend.urls')),
    path('dashboard/', include('frontend.urls')),
    re_path(r'^\S*$', RedirectView.as_view(url='/home/', permanent=True)),
]
