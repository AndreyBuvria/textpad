from rest_framework import serializers

from txtpad.models import Txtpad

class ItemDefaultSerializer(serializers.ModelSerializer):
  class Meta:
    model = Txtpad
    fields = '__all__'

class ItemSerializer(serializers.ModelSerializer):
  class Meta:
    model = Txtpad
    fields = ['title', 'id']
