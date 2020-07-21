const recorreArray = require('../librerias/recorrerArray.js');

const hobbies = ['correr', 'nadar', 'caminar'];

recorreArray.recorrerArray(hobbies);

const crearArchivoLibreria = require('./librerias/crearArchivo');
var textoArchivo = 'Hola, Mundo!';

crearArchivoLibreria.crearArchivoTest(textoArchivo);

const leerArchivo = require('./librerias/leerArchivo');
var nombreArchivo = 'test.txt';

leerArchivo.leerArchivo(nombreArchivo);

const imprime = require('../librerias/imprimir');

imprime.imprimir('Imprimí algo');
