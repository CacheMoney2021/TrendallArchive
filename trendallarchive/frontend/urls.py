from django.urls import path
from .views import index

urlpatterns = [
    path('', index),
    path('viewvase', index),
    path('advanced-search', index),
]