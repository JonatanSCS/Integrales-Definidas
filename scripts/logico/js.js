
var trapecios = 10000000;
var a = 0;
var b = Math.PI*(4/2);
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
seno();

error_a = (res_array[0])/2;
var error_b = ((res_array[trapecios ])/2);


for (i = 0; i <= trapecios; i += 1){
		//res_array[i] = 2*(Math.pow(res_array[i], 2));
    resultado = res_array[i] + resultado;
    //alert(res_array[i]);
	};


resultado = resultado - error_a - error_b;
resultado = resultado * (h/2);
if(trigonometrica = true){
	resultado = resultado *2;
}
alert(resultado);


function cuadrado(){
	for (i = 0; i <= trapecios; i += 1){
		res_array[i] = Math.pow(res_array[i], 2);
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



