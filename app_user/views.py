from .models import CustomUser
from django.shortcuts import redirect, render
from django.contrib.auth import login, authenticate
from django.views.generic import TemplateView
from django.http import HttpResponse

class SignupView(TemplateView):
    template_name = "registration/signup.html"

    def dispatch(self, request, *args, **kwargs):
        if request.method == 'POST':
            email = request.POST['email']
            first_name = request.POST['first_name']
            last_name = request.POST['last_name']
            city = request.POST['city']
            address = request.POST['address']
            phone_number = request.POST['phone_number']
            try:
                CustomUser.objects.create_user(first_name, last_name, city, address, phone_number, email)
                return redirect('login')
            except Exception:
                self.template_name = 'registration/email_error.html'
        return render(request, self.template_name)

def ProfileView(request):
    if request.user.is_authenticated:
        return HttpResponse(CustomUser.objects.filter(email=request.user))
