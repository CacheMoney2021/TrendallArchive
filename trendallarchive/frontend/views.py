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
from rest_framework.viewsets import ModelViewSet

# @api_view(['GET', 'POST'])
# def apiOverview(request):
#     api_urls = {
#         'viewvase' : '/viewvase/<str:pk>/'
#         }

#     return Response(api_urls)

# Create your views here.
def index(request, *args, **kwargs):
    return render(request, "frontend/index.html")

<<<<<<< HEAD

#THIS IS THE API THAT IS FUNCTIONING AND RETURNING JSON
@csrf_exempt
def viewVaseAPI(request,id=0):
    if request.method=='GET': #read-only from table
        vase = Vase.objects.all()
        serializer_vase = VaseSerializer(vase, many=True)
        return JsonResponse(serializer_vase.data, safe=False) #returned Json- dont know what to do with it now?

   

# API view to interact with shape table
@csrf_exempt
def viewShapeAPI(request,id=0):
    if request.method=='GET': #read-only from table
        shape = Shape.objects.all()
        serializer_shape = ShapeSerializer(shape, many=True)
        return JsonResponse(serializer_shape.data, safe=False) #returned Json- dont know what to do with it now?
    # elif request.method =='POST': #insert record into table
    #     shape_data = JSONParser().parse(request)
    #     serializer_shape = ShapeSerializer(data=shape_data)
    #     if serializer_shape.is_valid()
    #     serializer_shape.save()
    #     return JsonResponse("added successfully", safe=False)
    # elif request.method=='PUT' #update existing record

class VaseViewSet(ModelViewSet):
    # """
    # API endpoint that allows users to be viewed or edited.
    # """
    queryset = Vase.objects.all()
    serializer_vase = VaseSerializer
=======
>>>>>>> da1d7c8e11da5f4bd3d89ef4d741a63daa4084b6
