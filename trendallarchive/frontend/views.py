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

@api_view(['GET', 'POST'])
def apiOverview(request):
    api_urls = {
        'viewvase' : '/viewvase/<str:pk>/'
        }

    return Response(api_urls)

# Create your views here.
def index(request, *args, **kwargs):
    return render(request, "frontend/index.html")

@api_view(['GET'])
def viewVase(request):
    vase = Vase.objects.all()
    serializer = VaseSerializer(vase, many=True) #many=false when wanting just one record
    return Response()

# API view to retreive shape table. GET method to read data only
@csrf_exempt
def viewShapeAPI(request,id=0):
    if request.method=='GET':
        shape = Shape.objects.all()
        serializer_shape = ShapeSerializer(shape, many=True)
        return JsonResponse(serializer_shape.data, safe=False) #returned Json- dont know what to do with it now?
    # elif request.method =='POST':
    #     vase_data = JSONParser().parse(request)
    #     serializer_vase = VaseSerializer(data=vase_data)
    #     if serializer_vase.is_valid
    #     serializer_vase.save()
    #     return JsonResponse("added successfully", safe=False)
    # elif request.method=='PUT'