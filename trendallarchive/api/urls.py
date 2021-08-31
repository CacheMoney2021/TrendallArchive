
from django.urls import path
from .views import main
from . import views


urlpatterns = [
    path('', main),
    path('listvaseapi/', views.listVaseAPI, name="listvaseapi"),# path with API class to print the data request. this will eventually need a vaseID variable
    path('viewvase/', views.ViewVase.as_view(), name="viewvase")
]
