from django.http import HttpResponse
from django.template import loader

from .models import Funcion

def index(request):
	funciones_lista = Funcion.objects.order_by('-funcion_nombre')
	template = loader.get_template('calculaIntegrales/index.html')
	contex = {
		'funciones_lista': funciones_lista,
	}
	return HttpResponse(template.render(contex, request))