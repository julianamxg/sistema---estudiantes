"use strict";
exports.__esModule = true;
exports.formulario = void 0;
exports.formulario = document.getElementById('formulario');
var inputs = document.querySelectorAll('#formulario input');
var expresiones = {
    nombres: /^[a-zA-Z]{4,16}$/,
    apellidos: /^[a-zA-Z]{4,16}$/,
    tDocumento: /^[a-zA-Z]$/,
    nDocumento: /^{10}$/,
    grado: /^[a-zA-Z]$/,
    dGrado: /^[a-zA-Z]$/
};
