var x = ["a", "l", "f", "a"];
var y = ["a", "l", "f", "a", "j", "o", "r"];

function compararArrays(x,y){
	if(x.length == y.length){

		// Si son iguales

		for(i=0;x.length;i++){
			// Contar los elementos de X y Y
			if(x[i] != y[i]){

				letras = letrasEnComun(x,y);
				return "No son iguales, tiene: "+letras+" en comun"; //al primer elemento que no sea igual, me salgo y le digo que no son iguales.
			}
		}

		return "Son iguales";
	}else{

		if(x.length > y.length){

			letras = letrasEnComun(x,y);
			return "X es mayor que Y, tiene: "+letras+" en comun";
		}else{

			return "Y es mayor que X";
		}
	}
}

function letrasEnComun(x,y){

	var i, j;
	var cont = 0;
	var boleano = false;
	var z = [];

	for(i=0;i<x.length;i++){

		for(j=0;j<y.length;j++){

			if(x[i] == y[j]){
				boleano = true;
			}
		}

		if(boleano){
			if(z.indexOf(x[i]) == -1){
				z[k] = x[i];
				k++;
			}
			boleano = false;
	}

	return z.length;

	}
}

console.log(compararArrays(x,y));
