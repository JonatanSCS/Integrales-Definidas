from django.db import models

class Funcion(models.Model):
	funcion_nombre = models.CharField(max_length=10)

class Resultado(models.Model):
	calculo = models.DecimalField(max_digits=100, decimal_places=100)
	intervalo = models.DecimalField(max_digits=100, decimal_places=3)
	numero_trapecios = models.IntegerField(default=0)