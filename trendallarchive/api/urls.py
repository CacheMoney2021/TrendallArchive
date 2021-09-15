
from django.urls import path
from .views import GetTheVase, main
from . import views


urlpatterns = [
    path('', main),
    path('getthevase/', views.GetTheVase.as_view(), name="getthevase"),
    # path('viewvase/', views.GetVase.as_view(), name="listvaseapi"), #API URL path to viewvase page which uses getVase view to access vase based on vaseID
    path('searchresults/', views.FilterVases.as_view(), name="searchresults"), #API URL path to searchresults page which returns a list of vases matching parameters in the URL
    # path('getplate/', views.GetPlate.as_view(), name="getplate") #API URL path to get plateRef from plate table using vase_id (not vaseID) to return as a string to add to blob url
    # path('getshape/', views.getShape, name="getshape"),
    # path('getartist/', views.getArtist, name="getartist"),
    # path('getprovenance/', views.getProvenance, name="getprovenance"),
    # path('getcollection/', views.getCollection, name="getcollection")
]
