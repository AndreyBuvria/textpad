from django.urls import path
from . import views

urlpatterns = [
  path('', views.getListObject),
  path('create', views.createObject),
  path('<int:pk>', views.getObjectDetail),
  path('update/<int:pk>', views.getObjectDetail),
  path('delete/<int:pk>', views.getObjectDetail),

]
