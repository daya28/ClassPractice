/*document.getElementById("perfil");

// document.getElementsByID("perfil"); [se le agrega la s cuando son varios elementos en el nodo]

// o .getElementByClassName("perfil");

// o .getElementTagName(div);

var nombre = h1.textcontent; // Solo el valor "X"

var h2 = document.getElementById("Edad");

var edad = h2.textcontent; // "28" es una cadena de caracteres

// APLICAR UNA FUNCION PARA DETERMINAR LA EDAD

//DETERMINAR.... entonces necesito un numero entero

function validarEdad(x){

	var edad = parseInt(x);	// entero numero 
	// Convertir string en numero, si pudo, NaN(Not a Number)
	if(!isNan(edad)){
		.isNaN "NaN" true;
		.isNaN "28" false;
	}

	if(edad >= 18){

		return true;

	}else{
		return false;
	}
}

// NOOOOOOOOOOOOOOOOOOOOOOOOOOO //

// 	if(isNaN(x)){             -----------NO DEJAR VACIO EL IF
//	}else{
//	if(x >= 18){}
//	}
*/


var arrayNombres = ["Daya","Venezolana","Me gusta escuchar musica"]

var nombre = document.createElement('h1');
nombre.textContent = arrayNombres[0];

var nacionalidad = document.createElement('h2');
nacionalidad.textContent = arrayNombres[1];

var resumen = document.createElement('p');
resumen.textContent = arrayNombres[2];

var datosPersonales = document.getElementById('datosPersonales');
datosPersonales.appendChild(nombre);
datosPersonales.appendChild(nacionalidad);
datosPersonales.appendChild(resumen);



