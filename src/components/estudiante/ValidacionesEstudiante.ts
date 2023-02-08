
export const formulario = document.getElementById('formulario');
const inputs = document.querySelectorAll('#formulario input')

const expresiones = {
        nombres: /^[a-zA-Z]{4,16}$/,
        apellidos: /^[a-zA-Z]{4,16}$/,
        tDocumento: /^[a-zA-Z]$/,
        nDocumento: /^{10}$/,
        grado: /^[a-zA-Z]$/,
        dGrado: /^[a-zA-Z]$/
    }
