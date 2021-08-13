from django.urls import path
from . import views
from .views import index
#from .views import viewVase
from rest_framework import routers

urlpatterns = [
    path('', index),
    path('viewvase/', index),
    path('advanced-search', index),
    path('viewvaseapi/', views.viewVaseAPI, name="viewvaseapi")# path with API class to print the data request. this will eventually need a vaseID variable
]