const calculator = require('../librerias/calculator');
const crearArchivo = require('../librerias/crearArchivo');
const agregarTexto = require('../librerias/agregarTexto');

let res1 = calculator.sumar(8, 4);
let res2 = calculator.restar(8, 4);
let res3 = calculator.multiplicar(8, 4);
let res4 = calculator.dividir(8, 4);

crearArchivo.crearArchivoCalculator(res1);
agregarTexto.agregarTexto(res2);
agregarTexto.agregarTexto(res3);
agregarTexto.agregarTexto(res4);
