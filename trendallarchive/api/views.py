from django.shortcuts import render
from django.http import JsonResponse
from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
from rest_framework.parsers import JSONParser
from django.http.response import HttpResponse, JsonResponse
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework.serializers import Serializer
from .serializers import VaseSerializer
from .models import Vase
from rest_framework import viewsets
from rest_framework import generics
from rest_framework import filters


#Working API that returns all vase info. (vase.js only showing vase[0])
@csrf_exempt
def listVaseAPI(request,id=0):
    if request.method=='GET': #read-only from table
        vase = Vase.objects.all()
        serializer_vase = VaseSerializer(vase, many=True)
        return JsonResponse(serializer_vase.data, safe=False) 



# #https://www.django-rest-framework.org/api-guide/filtering/#djangofilterbackend

#searches for a vase based off a paramter passed through URL. so URL needs to include the query
# doesnt have subject yet, need to work out how to do a partial match search for this. 
# eg http://127.0.0.1:8000/api/viewvase/?vaseID=27

class ViewVase(generics.ListAPIView):
    serializer_class = VaseSerializer 
    def get_queryset(self):
        queryset = Vase.objects.all()
        provenance_id = self.request.query_params.get('provenance_id')
        if provenance_id is not None:
            queryset = queryset.filter(provenance_id=provenance_id)
        inscription = self.request.query_params.get('inscription')
        if inscription is not None:
            queryset = queryset.filter(inscription=inscription)
        shape_id = self.request.query_params.get('shape_id')
        if shape_id is not None:
            queryset = queryset.filter(shape_id=shape_id)
        collection_id = self.request.query_params.get('collection_id')
        if collection_id is not None:
            queryset = queryset.filter(collection_id=collection_id)
        artist_id = self.request.query_params.get('artist_id')
        if artist_id is not None:
            queryset = queryset.filter(artist_id=artist_id)
        fabric = self.request.query_params.get('fabric')
        if fabric is not None:
            queryset = queryset.filter(fabric=fabric)
        vaseID = self.request.query_params.get('vaseID')
        if vaseID is not None:
            queryset = queryset.filter(vaseID=vaseID)
        return queryset 


def main(request):
    return HttpResponse("Hello")