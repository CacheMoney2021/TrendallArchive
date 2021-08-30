from rest_framework import serializers
from .models import Vase, Shape

# vase serializer 
class VaseSerializer(serializers.ModelSerializer):
    class Meta:
        model = Vase
        fields = '__all__'
#serialize the model Shape
class ShapeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Shape
        fields = '__all__' #access all fields

