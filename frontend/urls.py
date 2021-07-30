from django.urls import path
from .views import indexView, homeView

urlpatterns = [
    path('', homeView),
    path('index', indexView),
]