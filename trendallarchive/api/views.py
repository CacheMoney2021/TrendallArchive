from django.shortcuts import render
from django.http import JsonResponse
from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
from django.http.response import HttpResponse, JsonResponse
from rest_framework.response import Response
from rest_framework.serializers import Serializer
from .serializers import VaseSerializer
from .models import Vase
from rest_framework import generics
from rest_framework import filters


# #Working API that returns all vase info. (vase.js only showing vase[0])
# @csrf_exempt
# def listVaseAPI(request,id=0):
#     if request.method=='GET': #read-only from table
#         vase = Vase.objects.all()
#         serializer_vase = VaseSerializer(vase, many=True)
#         return JsonResponse(serializer_vase.data, safe=False) 

# API view to get a vase with a vaseID passed through the URL
# class GetVase(generics.ListAPIView):
#     serializer_class = VaseSerializer 
#     def get_queryset(self):
#         queryset = Vase.objects.all()
#         vaseRef = self.request.query_params.get('vaseRef')
#         if vaseRef is not None:
#             queryset = queryset.filter(vaseRef=vaseRef)
#         return queryset

class GetTheVase(generics.ListAPIView):
    serializer_class = VaseSerializer
    def get_queryset(self):
        queryset = Vase.objects.all()
        vaseRef=self.request.query_params.get('vaseRef')
        try:
            if vaseRef is not None:
                queryset = queryset.filter(vaseRef=vaseRef)
            return queryset       
        except Exception as e:
            print(e)
            pass

# #API view for Basic Search and Advanced Search, takes in a vase paramter passed through URL.
class FilterVases(generics.ListAPIView):
    serializer_class = VaseSerializer 
    def get_queryset(self):
        queryset = Vase.objects.all()
        shapeName = self.request.query_params.get('shapeName')
        if shapeName is not None:
            try:
                queryset = queryset.filter(shapeName__icontains=shapeName)
            except Exception as e:
                print(e)
        collectionName = self.request.query_params.get('collectionName')
        if collectionName is not None:
            try:
                queryset = queryset.filter(collectionName__icontains=collectionName)
            except Exception as e:
                print(e)
        artistName = self.request.query_params.get('artistName')
        if artistName is not None:
            try:
                queryset = queryset.filter(artistName__icontains=artistName)
            except Exception as e:
                print(e)
                pass
        provenanceName = self.request.query_params.get('provenanceName')
        if provenanceName is not None:
            try:
                queryset = queryset.filter(provenanceName__icontains=provenanceName)
            except Exception as e:
                print(e)
                pass
        publications = self.request.query_params.get('publications')
        if publications is not None:
            try:
                queryset = queryset.filter(publications__icontains=publications)
            except Exception as e:
                print(e)
                pass    
        fabric = self.request.query_params.get('fabric')
        if fabric is not None:
            queryset = queryset.filter(fabric__icontains=fabric)
        vaseRef = self.request.query_params.get('vaseRef')
        if vaseRef is not None:
            queryset = queryset.filter(vaseRef__icontains=vaseRef)
            vaseID = self.request.query_params.get('vaseRef')
        subject = self.request.query_params.get('subject')
        if subject is not None:
            queryset = queryset.filter(subject__icontains=subject) #return all records that have subject 'LIKE' user input subject
        return queryset 

# class FilterVases(generics.ListAPIView):
#     serializer_class = VaseSerializer 
#     def get_queryset(self):
#         queryset = Vase.objects.all()
#         fabric = self.request.query_params.get('fabric')
#         if fabric is not None:
#             queryset = queryset.filter(fabric__icontains=fabric)
#         vaseRef = self.request.query_params.get('vaseRef')
#         if vaseRef is not None:
#             queryset = queryset.filter(vaseRef=vaseRef)
#         subject = self.request.query_params.get('subject')
#         if subject is not None:
#             queryset = queryset.filter(subject__icontains=subject) 
#         return queryset 

#API view to retreive the plateRef using the vase_id passed as a URL parameter 
# class GetPlate(generics.ListAPIView):
#     serializer_class = PlateSerializer 
#     def get_queryset(self):
#         queryset = Plate.objects.all()
#         vaseRef = self.request.query_params.get('vaseRef')
#         plateRef = self.request.query_params.get('plateRef')
#         if vaseRef is not None:
#             queryset = queryset.filter(vaseRef=vaseRef)
#         if plateRef is not None:
#             queryset = queryset.filter(plateRef=plateRef)
#         return queryset

# #API views to return list of names for facted search
# @csrf_exempt
# def getShape(request,id=0):
#     if request.method=='GET': #read-only from table
#         shape = Shape.objects.all()
#         serializer_shape = ShapeSerializer(shape, many=True)
#         return JsonResponse(serializer_shape.data, safe=False)
# @csrf_exempt
# def getArtist(request,id=0):
#     if request.method=='GET': #read-only from table
#         shape = Artist.objects.all()
#         serializer_artist = ArtistSerializer(shape, many=True)
#         return JsonResponse(serializer_artist.data, safe=False)
# @csrf_exempt
# def getProvenance(request,id=0):
#     if request.method=='GET': #read-only from table
#         provenance = Provenance.objects.all()
#         serializer_provenance = ProvenanceSerializer(provenance, many=True)
#         return JsonResponse(serializer_provenance.data, safe=False)

# @csrf_exempt
# def getCollection(request,id=0):
#     if request.method=='GET': #read-only from table
#         collection = Collection.objects.all()
#         serializer_collection = CollectionSerializer(collection, many=True)
#         return JsonResponse(serializer_collection.data, safe=False)



def main(request):
    return HttpResponse("Hello")