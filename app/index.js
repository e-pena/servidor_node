const libreriaTest1 = require('./librerias/libreriaTest1');

const hobbies = ['correr', 'nadar', 'caminar'];

libreriaTest1.recorrerArray(hobbies);

const crearArchivoLibreria = require('./librerias/crearArchivo');
var textoArchivo = 'Hola, Mundo!';

crearArchivoLibreria.crearArchivoTest(textoArchivo);

const leerArchivo = require('./librerias/leerArchivo');
var nombreArchivo = 'test.txt';

leerArchivo.leerArchivo(nombreArchivo);
