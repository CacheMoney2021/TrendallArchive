from django.urls import path
from . import views
from .views import index
from .views import viewVase

urlpatterns = [
    path('', index),
    #path('viewvase', index),
    path('advanced-search', index),
    path('viewvase/', views.viewVaseAPI, name="viewvaseapi")# path with API class to print the data request
]