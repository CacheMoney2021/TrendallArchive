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


# close here..... this api takes a parameter from the url to search for a vase 
# #https://www.django-rest-framework.org/api-guide/filtering/#djangofilterbackend
class ViewVase(generics.ListAPIView):
    serializer_vase = VaseSerializer
    @staticmethod
    def list(self):
        vase = Vase.objects.all()
        vaseID = self.request.query_params.get('vaseID')
        vase = vase.filter(vase__vaseID=vaseID)
        return vase

#below are different attempts that are abandoned for now but might come back to.....

# a different attempt using filter but the import isnt working. leaving for now. 
# class VaseViewSet(viewsets.ViewSet):
#     def list(self,request):
#         queryset = Vase.objects.all()
#         serializer_vase = VaseSerializer
#         filter_backends = [filters.SearchFilter]
#         return JsonResponse(serializer_vase.data, safe=False)

# @csrf_exempt
# def basicSearchAPI(request,id=0):
#     if request.method=='GET': #read-only from table
#         vase = Vase.objects.all()
#         serializer_vase = VaseSerializer(vase, many=True)
#         return JsonResponse(serializer_vase.data, safe=False) 
def main(request):
    return HttpResponse("Hello")