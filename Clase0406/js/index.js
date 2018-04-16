/* DETERMINAR LOS PRIMEROS DIEZ NUMEROS DE FIBONACCI */

/*var numerofibonacci = 0;
var numeroAnterior;
var numerosuma;
var numerocont;

while( numerocont >1 && numerocont <10 ){

	if(numeroAnterior==0){

		numerofibonacci+ 1;

	}else{

	numerofibonacci=numeroAnterior+

	}
} */

/* Ejercicio 1 - Cargar de forma automática incremental, 
un array de números a partir de un largo dado por el usuario.*/

/*var N = 10;
var numeros = [];

	for(i=0;i<N;i++){

		numeros[i] = i;
		console.log(numeros[i]);
	}*/

/*Ejercicio 2 - Repetir el ejercicio anterior, 
ubicando 0 (ceros), en las posiciones pares y un valor 
que coincida con el índice en las posiciones impares.*/


/*var N = 10;
var numeros = [];

	for(i=0;i<N;i++){

		numeros[i] = i;

		if(i%2==0){

		console.log("0");

		
	}else{
		console.log(numeros[i]);
	}
}*/

/*Ejercicio 3 - Dado el siguiente arreglo de números 
x = [10,24,36,7,98,11,14,20], mostrar por pantalla 
el valor máximo.*/

var N = 8;
var x = [10,24,36,7,98,11,14,20];
var numeroMayor=0;

for(i = 0; i < N; i++) {

	if(numeroMayor > x){

		numeroMayor = numeroMayor;

		console.log(numeroMayor);

	}else if(numeroMayor < x){

			numeroMayor = x

		}
	
}
