from django.shortcuts import render
from django.http import JsonResponse
from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
from rest_framework.parsers import JSONParser
from django.http.response import JsonResponse
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework.serializers import Serializer
from .serializers import ShapeSerializer, VaseSerializer
from .models import Vase, Shape

# Create your views here.
#THIS IS THE API THAT IS FUNCTIONING AND RETURNING JSON
@csrf_exempt
def viewVaseAPI(request,id=0):
    if request.method=='GET': #read-only from table
        vase = Vase.objects.all()
        serializer_vase = VaseSerializer(vase, many=True)
        return JsonResponse(serializer_vase.data, safe=False) #returned Json- dont know what to do with it now?

  

def main(request):
    return HttpResponse("Hello")