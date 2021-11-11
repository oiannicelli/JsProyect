/* --- VALIDACION DE INFORMACION EN FORMULARIO PARA ENVIO DE DATOS ------- */

// Seleccionar todos los elementos del formulario para validarlos y los guardo en un array:
const inputs = document.getElementsByClassName('formulario__input');

// Recorro el array de acuerdo a la cantidad de elementos que hay:
for (let i = 0; i < inputs.length; i++) {

	// Escuchar el evento cuando el usuario termina de escribir en la celda:
	inputs[i].addEventListener('keyup', function() {

		// Si el valor del elemento input es mayor a 1 se realiza la siguiente funcion:
		if(this.value.length>=1) {

			// Se agrega la clase "fijar" para mantener el valor del label arriba:
			this.nextElementSibling.classList.add('fijar');
			}

			// Se quita la clase "fijar" si no hay escrito nada - el valor del label vuelve a estar debajo:
			else {
			this.nextElementSibling.classList.remove('fijar');
		}
	});
}