from django.shortcuts import render
from django.http import JsonResponse
from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
from rest_framework.parsers import JSONParser
from django.http.response import JsonResponse
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

#searches for a vase based off a VASEID passed through URL. so URL needs to include the query
# eg http://127.0.0.1:8000/api/viewvase/?vaseID=27

class ViewVase(generics.ListAPIView):
    serializer_class = VaseSerializer
    def get_queryset(self):
        queryset = Vase.objects.all()
        vaseID = self.request.query_params.get('vaseID')
        if vaseID is not None:
            queryset = queryset.filter(vaseID=vaseID)
        return queryset



def main(request):
    return HttpResponse("Hello")