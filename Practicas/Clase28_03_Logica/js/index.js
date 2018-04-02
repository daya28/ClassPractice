/*Tomar dos variables, si ambas son mayores de 10, entonces los sumo, sino los multiplico */

x = 5;
y = 8;
z = 0;
/*declarar la variable*/
suma = 0;

if(x>10 && y>10){
	z = x+y;/*ejecuto la suma solo si ambas variables cumplen*/
}else{
	z = x*y;
	/*Ejecuto la multiplicacion siempre que alguna sea menor < que 10 o ambas*/
}

console.log("El resultado es: "+z)

/**********sumar dos variables si al menos una de ellas es mayor de 10, de lo contrario multiplicarlos.**********/

if(x > 10 || y > 10){
	z = x + y;
}else{
	z = x*y;
}

console.log("El resultado es:"+z)/*esto es una concatenacion*/

/* Mostrar mensaje de bienvenida incluyendo nombre y apellido solo si coinciden con los valores "Belen" y "Alegre"*/

nombre = "Belen";
apellido = "Alegre";

if( nombre == "Belen" && apellido == "Alegre"){
	
	bienvenida = "Bienvenida a ADA " +nombre+" "+apellido;
	console.log(bienvenida);
}
