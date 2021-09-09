from django.shortcuts import render
from django.http import JsonResponse
from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
from django.http.response import HttpResponse, JsonResponse
from rest_framework.response import Response
from rest_framework.serializers import Serializer
from .serializers import VaseSerializer, PlateSerializer, ArtistSerializer
from .models import Vase, Plate, Artist, Collection, Shape, Provenance
from rest_framework import viewsets
from rest_framework import generics
from rest_framework import filters


# #Working API that returns all vase info. (vase.js only showing vase[0])
# @csrf_exempt
# def listVaseAPI(request,id=0):
#     if request.method=='GET': #read-only from table
#         vase = Vase.objects.all()
#         serializer_vase = VaseSerializer(vase, many=True)
#         return JsonResponse(serializer_vase.data, safe=False) 

#API view to get a vase with a vaseID passed through the URL
class GetVase(generics.ListAPIView):
    serializer_class = VaseSerializer 
    def get_queryset(self):
        queryset = Vase.objects.all()
        vaseID = self.request.query_params.get('vaseID')
        if vaseID is not None:
            queryset = queryset.filter(vaseID=vaseID)
        return queryset

# #https://www.django-rest-framework.org/api-guide/filtering/#djangofilterbackend

#API view searches for a vase based off a paramter passed through URL. so URL needs to include the query
# doesnt have subject yet, need to work out how to do a partial match search for this. 
# eg http://127.0.0.1:8000/api/viewvase/?vaseID=27
# updated to take an artist name rather than artist id (same for the other FK) hwoever only works for some inputs?
#eg filters down when using the record with (dummy record) "collection name" but not "Naples"??

class FilterVases(generics.ListAPIView):
    serializer_class = VaseSerializer 
    def get_queryset(self):
        queryset = Vase.objects.all()
        query_provenance = self.request.query_params.get('provenance_name')
        if query_provenance is not None:
            try:
                provenance = Provenance.objects.get(provenanceName=query_provenance)
                queryset = queryset.filter(provenance=provenance)
            except Exception as e:
                print(e)
        inscription = self.request.query_params.get('inscription')
        if inscription is not None:
            queryset = queryset.filter(inscription=inscription)
        query_shape = self.request.query_params.get('shape_name')
        if query_shape is not None:
            try:
                shape = Shape.objects.get(shapeName=query_shape)
                queryset = queryset.filter(shape=shape)
            except Exception as e:
                print(e)
        query_collection = self.request.query_params.get('collection_name')
        if query_collection is not None:
            try:
                collection = Collection.objects.get(collectionName=query_collection)
                queryset = queryset.filter(collection=collection)
            except Exception as e:
                print(e)
        query_artist = self.request.query_params.get('artist_name')
        if query_artist is not None:
            try:
                artist = Artist.objects.get(artistName=query_artist)
                queryset = queryset.filter(artist=artist)
            except Exception as e:
                print(e)
                pass
        fabric = self.request.query_params.get('fabric')
        if fabric is not None:
            queryset = queryset.filter(fabric=fabric)
        vaseID = self.request.query_params.get('vaseID')
        if vaseID is not None:
            queryset = queryset.filter(vaseID=vaseID)
        return queryset 

#API view to retreive the plateRef using the vase_id passed as a URL parameter 
class GetPlate(generics.ListAPIView):
    serializer_class = PlateSerializer 
    def get_queryset(self):
        queryset = Plate.objects.all()
        vase_id = self.request.query_params.get('vase_id')
        plateRef = self.request.query_params.get('plateRef')
        if vase_id is not None:
            queryset = queryset.filter(vase_id=vase_id)
        if plateRef is not None:
            queryset = queryset.filter(plateRef=plateRef)
        return queryset


def main(request):
    return HttpResponse("Hello")