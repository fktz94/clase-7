const $form = document.getElementById('carta-a-santa');

const nombre = $form.nombre.value;
const ciudad = document.formulario.ciudad.value;
const comportamiento = document.querySelector('[name=formulario]').comportamiento.value;
const descripcionRegalo = document.getElementById('carta-a-santa')['descripcion-regalo'].value;


function validarNombre(nombre) {
    if (nombre.length === 0) {
        return 'Este campo debe tener al menos un caracter';
    }

    if (nombre.length >= 50) {
        return 'Este campo debe tener menos de 50 caracteres'
    }

    return '';
}


function validarCiudad(ciudad) {
    if (ciudad === '') {
        return 'Tenés que elegir alguna ciudad'
    }
    return '';
    
}


function validarDescripcionRegalo(descripcionRegalo) {
    if (descripcionRegalo === '') {
        return 'Tenés que escribir la descripción del regalo que querés'
    }

    if (descripcionRegalo.length >= 100) {
        return 'Tenés que escribir menos de 100 caracteres'
    }

    return '';
}