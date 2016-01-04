$(document).ready(function(){
	var contador_a = 0;
	var contador_b = 0;
	var contador_n = 1;
	var trigonometrica_pi = ["0", "PI/4", "PI/2",  "3PI/4", "PI", "5PI/4", "6PI/4", "7PI/4", "2PI"];
	var pi_a = 0;
	var pi_b = 0;
	var trigonometrica = false;
	var funcion;

	$(".trigonometrica").click(function(){
		trigonometrica = true;
		pi_a = 0;
		pi_b = 0;
		$("#input-a").val(trigonometrica_pi[pi_a]);
		$(".label-a").html(trigonometrica_pi[pi_a]);
		$("#input-b").val(trigonometrica_pi[pi_b]);
		$(".label-b").html(trigonometrica_pi[pi_b]);
		funcion = $(this).find("button")
		$(".label-funcion").html(funcion.html());

	});

	$(".normal").click(function(){
		trigonometrica = false;
		contador_a = 1;
		contador_b = 1;
		$("#input-a").val(contador_a);
		$(".label-a").html(contador_a);
		$("#input-b").val(contador_b);
		$(".label-b").html(contador_b);
		funcion = $(this).find("button")
		$(".label-funcion").html(funcion.html());


	});

	
	$(".suma-a").click(function(){
		if(trigonometrica == true){
			if(pi_a<=6){
				pi_a = pi_a + 1;
				$("#input-a").val(trigonometrica_pi[pi_a]);
				$(".label-a").html(trigonometrica_pi[pi_a]);
			}

		}
		else if(trigonometrica == false){
			contador_a = contador_a + 1;
			$("#input-a").val(contador_a);
			$(".label-a").html(contador_a);

		}

	});
	$(".resta-a").click(function(){
		if(trigonometrica == true){
			if(pi_a>=1){
				pi_a = pi_a - 1;
				$("#input-a").val(trigonometrica_pi[pi_a]);
				$(".label-a").html(trigonometrica_pi[pi_a]);
			}

		}
		else if(trigonometrica == false){
			contador_a = contador_a - 1;
			$("#input-a").val(contador_a);
			$(".label-a").html(contador_a);

		}

	});
	$(".suma-b").click(function(){
		if(trigonometrica == true){
			if(pi_b<=6){
				pi_b = pi_b + 1;
				$("#input-b").val(trigonometrica_pi[pi_b]);
				$(".label-b").html(trigonometrica_pi[pi_b]);
			}

		}
		else if(trigonometrica == false){
			contador_b = contador_b + 1;
			$("#input-b").val(contador_b);
			$(".label-b").html(contador_b);

		}

	});

	$(".resta-b").click(function(){
		if(trigonometrica == true){
			if(pi_b>=1){
				pi_b = pi_b - 1;
				$("#input-b").val(trigonometrica_pi[pi_b]);
				$(".label-b").html(trigonometrica_pi[pi_b]);
			}

		}
		else if(trigonometrica == false){
			contador_b = contador_b - 1;
			$("#input-b").val(contador_b);
			$(".label-b").html(contador_b);

		}

	});

	$(".suma-n").click(function(){
		contador_n = contador_n + 1;
		$("#input-n").val(contador_n);
		$(".label-n").html(contador_n);
	});
	$(".resta-n").click(function(){
		if(contador_n >= 2){
			contador_n = contador_n - 1;
			$("#input-n").val(contador_n);
			$(".label-n").html(contador_n);
		}
	});
		$.removeCookie('funcion');
		$.removeCookie('inter-a');
		$.removeCookie('inter-b');
		$.removeCookie('trapecio');

	$("#boton-calcular").click(function(){
	

		$.cookie('funcion', $(".label-funcion").html());
		$.cookie('inter-a', $("#input-a").val());
		$.cookie('inter-b', $("#input-b").val());
		$.cookie('trapecio', contador_n);

	});


	








});