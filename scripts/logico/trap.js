



var trigonometrica_pi = ["0", "PI/4", "PI/2",  "3PI/4", "PI", "5PI/4", "6PI/4", "7PI/4", "2PI"];
var divicion = [0, 1/4, 1/2, 3/4, 1, 5/4, 6/4, 7/4, 8/4];

var trigo_a = trigonometrica_pi.indexOf($.cookie("inter-a"));
var trigo_b = trigonometrica_pi.indexOf($.cookie("inter-b"));
var a;
var b;
if(trigo_a >= 0){
	a = (Math.PI * divicion[trigo_a]);
	b = (Math.PI * divicion[trigo_b]);



}
else{
	a = Number($.cookie("inter-a"));
	b = Number($.cookie("inter-b"));
}

var trapecios = Number($.cookie("trapecio"));
var h = (b - a) / trapecios;



var val_array = [a];
var resultado = 0;
var i;
var error_a;
var trigonometrica = false;
for (i = 1; i <= trapecios; i += 1) {
	val_array[i] = a + h*i;

};
var numero = val_array.length;
var res_array = val_array;

var funciones = ["sen(x)", "cos(x)", "tan(x)", "csc(x)", "sec(x)", "cot(x)", "x", "x^2", "x^3", "x^1/2"];

var funcion_cookie = funciones.indexOf($.cookie("funcion"));

switch(funcion_cookie) {
	case 0:
		seno();
		break;
	case 1:
		coseno();
		break;
	case 2:
		tangente();
		break;
	case 3:
		aseno();
		break;
	case 4:
		acoseno();
		break;
	case 5:
		atangente();
		break;
	case 6:
		x();
		break;
	case 7:
		cuadrado();
		break;
	case 8:
		cubo();
		break
	case 9:
		raiz;
		break;

	default:
		break;
}



error_a = (res_array[0])/2;
var error_b = ((res_array[trapecios ])/2);


for (i = 0; i <= trapecios; i += 1){
    resultado = res_array[i] + resultado;
};


resultado = resultado - error_a - error_b;
$(".resultado").html("h/2 ("+resultado+")");
resultado = resultado * (h/2);
if(trigonometrica = true){
	resultado = resultado * 2;
}



if(isNaN(resultado)){
	resultado = "Infinito o Indefinido";
}
$(".resultado-final").html("Resultado Final: "+ resultado);


function x(){
	for (i = 0; i <= trapecios; i += 1){
		res_array[i] = res_array[i];
	};

}

function cuadrado(){
	for (i = 0; i <= trapecios; i += 1){
		res_array[i] = Math.pow(res_array[i], 2);
	};
}
function cubo(){
	for (i = 0; i <= trapecios; i += 1){
		res_array[i] = Math.pow(res_array[i], 3);
	};
}
function raiz(){
	for (i = 0; i <= trapecios; i += 1){
		res_array[i] = Math.sqrt(res_array[i]);
	};
}

function seno(){
	for (i = 0; i <= trapecios; i += 1){
		res_array[i] = Math.sin(res_array[i]);
	};
	trigonometrica = true;
}

function coseno(){
	for (i = 0; i <= trapecios; i += 1){
		res_array[i] = Math.cos(res_array[i]);
	};
  trigonometrica = true;

}

function tangente(){
	for (i = 0; i <= trapecios; i += 1){
		res_array[i] = Math.tan(res_array[i]);
	};
  trigonometrica = true;

}

function aseno(){
	for (i = 0; i <= trapecios; i += 1){
		res_array[i] = Math.asin(res_array[i]);
	};
  trigonometrica = true;

}
function acoseno(){
	for (i = 0; i <= trapecios; i += 1){
		res_array[i] = Math.acos(res_array[i]);
	};
  trigonometrica = true;

}

function atangente(){
	for (i = 0; i <= trapecios; i += 1){
		res_array[i] = Math.atan(res_array[i]);
	};
  trigonometrica = true;

}



