from rest_framework.response import Response
from rest_framework.decorators import api_view
from txtpad.models import Txtpad
from .serializers import ItemDefaultSerializer, ItemSerializer

@api_view(['GET'])
def getListObject(request):
  list = Txtpad.objects.all()
  serializer = ItemSerializer(list, many=True)
  return Response(serializer.data)

@api_view(['GET', 'UPDATE', 'DELETE'])
def getObjectDetail(request, pk):
  try:
    txtpd_item = Txtpad.objects.get(id=pk)
  except:
    return Response({})

  if request.method == 'GET':
    serializer = ItemDefaultSerializer(txtpd_item)
    return Response(serializer.data)
  elif request.method == 'UPDATE':
    pass
  elif request.method == 'DELETE':
    txtpd_item.remove()
    return Response({})

@api_view(['POST'])
def createObject(request):
  serializer = ItemDefaultSerializer(data=request.data)
  if serializer.is_valid():
    serializer.save()
    return Response(serializer.data)
  return Response(serializer.errors)
