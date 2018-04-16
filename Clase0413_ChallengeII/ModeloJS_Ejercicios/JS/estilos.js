function validarFormulario(){

//Me traigo las etiquetas obligatorio y obLabel

// 1ERO DECLARACION DE VARIABLES GLOBALES

var obligatorios = document.getElementsByClassName('obligatorio');
var obLabel = document.getElementsByClassName('obLabel');
console.log(obligatorios);

// RECORRIDO DE CAMPOS OBLIGATORIOS ┐

for(var i = 0; i< obligatorios.length; i++){
	if(obligatorios[i].value.length == 0){
		obLabel[i].innerHTML = "Campo obligatorio";
	}
}

}

// LLAMADAS DE LAS FUNCIONES AL FINAL (LISTENER)

var btnEnviar = document.getElementById('boton');
btnEnviar = document.addEventListener('click',validarFormulario);

//BUSCAR EXPRESIONES PARA VALIDAR MAIL

