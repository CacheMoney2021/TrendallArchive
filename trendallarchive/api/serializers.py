from rest_framework import serializers
from .models import Collection, Provenance, Vase, Shape, Plate, Artist

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
#serialize plate model
class PlateSerializer(serializers.ModelSerializer):
    class Meta:
        model = Plate
        fields = '__all__' #access all fields
#serialize the artist model 
class ArtistSerializer(serializers.ModelSerializer):
    class Meta:
        model = Artist
        fields = '__all__' #access all fields
#serialize the Collection model
class CollectionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Collection
        fields = '__all__' #access all fields
#serialize Provenance model
class ProvenanceSerializer(serializers.ModelSerializer):
    class Meta:
        model = Provenance
        fields = '__all__' #access all fields