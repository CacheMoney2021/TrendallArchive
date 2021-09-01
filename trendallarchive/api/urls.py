
from django.urls import path
from .views import main
from . import views


urlpatterns = [
    path('', main),
    # path('listvaseapi/', views.listVaseAPI, name="listvaseapi"),
    path('viewvase/', views.ViewVase.as_view(), name="viewvase"),
    path('getplate/', views.GetPlate.as_view(), name="getplate")
]
