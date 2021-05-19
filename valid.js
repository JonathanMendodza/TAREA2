//Parte de Código de JS

const formulario = document.getElementById('Formulario');

const inputs =document.querySelectorAll('#Formulario input');

//Validación para el campo nombre no se pueda ingresar numeros, solo letras y espacios
nombre.addEventListener('keyup', (e) => {
	let valorInput = e.target.value;
    //Eliminamos los numeros
	nombre.value = valorInput.replace(/[0-9]/g, '');
	nombre.textContent = valorInput;
});
//Validación para el campo apellido no se pueda ingresar numeros, solo letras y espacios
apellidos.addEventListener('keyup', (e) => {
	let valorInput = e.target.value;
    //Eliminamos los numeros
	apellidos.value = valorInput.replace(/[0-9]/g, '');
	apellidos.textContent = valorInput;
});
//Validacion para el campo telefono en el cual no se permite ingresar nigun tipo de letras ni espacios en blanco.
telefono.addEventListener('keyup', (e) => {
	let valorInput = e.target.value;
    telefono.value = valorInput
	// Eliminamos espacios en blanco
	.replace(/\s/g, '')
	// Eliminar las letras
	.replace(/\D/g, '');
} );
//Validacion para el campo cedula en el cual no se permite ingresar nigun tipo de letras ni espacios en blanco.
cedula.addEventListener('keyup', (e) => {
	let valorInput = e.target.value;
    cedula.value = valorInput
	// Eliminamos espacios en blanco
	.replace(/\s/g, '')
	// Eliminar las letras
	.replace(/\D/g, '');
} );

//Validación para el submit del formulario el cual deben estar todos los campos llenos para que se registre correctamente el formulario.
formulario.addEventListener('submit', (e) => {
    e.preventDefault();

    if(nombre.value && apellidos.value && telefono.value &&cedula.value && direccion.value && fecha.value && correo.value && sexo.value !==''){
        formulario.reset();
        document.getElementById('form_enviado').classList.add('form_enviado-activo');
        setTimeout(() => {
			document.getElementById('form_enviado').classList.remove('form_enviado-activo');
    }, 5000);}
    else{document.getElementById('form_error').classList.add('form_error-activo');
    setTimeout(() => {
        document.getElementById('form_error').classList.remove('form_error-activo');
}, 500);}

});