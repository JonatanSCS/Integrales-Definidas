$(document).ready(function(){
	var contador_a = 1;
	var contador_b = 1;
	var contador_n = 1;

	$(".suma-a").click(function(){
			contador_a = contador_a + 1;
			$("#input-a").val(contador_a);
			$(".label-a").html(contador_a);

	});

	$(".resta-a").click(function(){
		contador_a = contador_a - 1;
		$("#input-a").val(contador_a);
		$(".label-a").html(contador_a);
	});


	$(".suma-b").click(function(){
			contador_b = contador_b + 1;
			$("#input-b").val(contador_b);
			$(".label-b").html(contador_b);
	});

	$(".resta-b").click(function(){
		contador_b = contador_b - 1;
		$("#input-b").val(contador_b);
		$(".label-b").html(contador_b);
	});

	$(".suma-n").click(function(){
			contador_n = contador_n + 1;
			$("#input-n").val(contador_n);
			$(".label-n").html(contador_n);
	});

	$(".resta-n").click(function(){
		if(contador_n != 1){
			contador_n = contador_n - 1;
			$("#input-n").val(contador_n);
			$(".label-n").html(contador_n);
		}
	});


	$(".opcion-funcion").click(function(){
		var boton = $(this).find("button");
		$(".label-funcion").html(boton.html());
		if(boton.html()){}
	});

});