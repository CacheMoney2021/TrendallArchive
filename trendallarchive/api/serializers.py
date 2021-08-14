from rest_framework import serializers
from .models import Vase

class VaseSerializer(serializers.ModelSerializer):
    class meta:
        model = Vase
        fields = '__all__'