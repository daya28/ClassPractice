

/* ------------------- Forma 1 ----------------- */

monto = 1000; descuento = 0; aumento = 0;

	if(monto < 500){
		console.log("monto a pagar:"+monto);
	}
	if(monto > 500 && monto <= 1000){
		descuento = 0.1*monto;
		monto = monto - descuento;
		console.log("Desc:" +descuento+ "pagas" +monto);
	}
	if(monto > 1001 && monto <= 1500){

	}
	if(monto > 1500){

	}
	if(monto > 500){
		aumento = 0.05*monto;
		monto = monto + aumento;
		console.log("aumento:" +aumento+ "pagas" +monto);
	}


/* -------------------Aumento con TDC------------------ */

/*monto = 1000; descuento = 0; pagoT = true; cuotas = 1; 3; 6;

if(pagoT == true){
	if(cuotas == 3){
		recargo = 0.05;
	}
	if(cuotas == 6){
		recargo = 0.1;
	}
	monto = monto + recargo * monto;
}

console.log("Total:" +monto");*/

/* DETERMINAR SI UN NUMERO ES PRIMO */

var num=20;
var cont=2;
var esPrimo=true;

	while((cont > 1 && cont < num) && esPrimo == true){

		resto = num%cont; /*modulo de numero*/
		if(resto == 0){
			//console.log("No es primo");//
			esPrimo=false;
		}
		cont++;
}
		if(esPrimo == false){
			console.log("No es primo");
		}else{
			console.log("Es primo");
		}
		

		