
from django.urls import path
from .views import main
from . import views


urlpatterns = [
    path('', main),
    path('viewvaseapi/', views.viewVaseAPI, name="viewvaseapi")# path with API class to print the data request. this will eventually need a vaseID variable
]
