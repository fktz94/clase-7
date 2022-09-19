function probarValidarNombre() {
    console.assert(
        validarNombre('') === 'Este campo debe tener al menos un caracter',
        'validarNombre no funcionó con un string vacío'
    );

    console.assert(
        validarNombre(
            'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx') === 'Este campo debe tener menos de 50 caracteres',
        'validarNombre no validó que el nombre sea menor a 50 caracteres'
    );

    console.assert(
        validarNombre(
            'Facundo Ortiz') === '',
        'validarNombre no funcionó con un nombre válido'
    )
}



function probarValidarCiudad() {
    console.assert(
        validarCiudad('') === 'Tenés que elegir alguna ciudad',
        'validarCiudad no funcionó con un string vacío'
    );

    console.assert(
        validarCiudad(
            'Chaco') === '',
        'validarCiudad falló con una ciudad válida'
    )
}



function probarValidarDescripcionRegalo() {
    console.assert(
        validarDescripcionRegalo('') === 'Tenés que escribir la descripción del regalo que querés',
        'validarDescripcionRegalo no funcionó con un string vacío'
    );

    console.assert(
        validarDescripcionRegalo(
            'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx') === 'Tenés que escribir menos de 100 caracteres',
        'validarDescripcionRegalo no funcionó con más de 100 caracteres'
    );

    console.assert(
        validarDescripcionRegalo(
            'Quiero una bicicleta') === '',
        'validarDescripcionRegalo no funcionó con un texto válido'
    );
}


probarValidarNombre();
probarValidarCiudad();
probarValidarDescripcionRegalo();