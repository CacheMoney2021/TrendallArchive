
from django.urls import path
from .views import GetTheVase, main
from . import views


urlpatterns = [
    path('', main),
    path('getthevase/', views.GetTheVase.as_view(), name="getthevase"), #API endpoint to get all the attributes for a vase
    path('searchresults/', views.FilterVases.as_view(), name="searchresults"), #API endpoint to retreive all vases matching parameters passed in the URL
    path('getplate/', views.GetPlate.as_view(), name="getplate") #API URL path to get plateRef from plate table using vase_id (not vaseID) to return as a string to add to blob url
]
