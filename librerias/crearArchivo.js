const fs = require('fs');

module.exports.crearArchivoTest = function (text) {
	fs.writeFile('./test.txt', text, function (err) {
		if (err) {
			return console.log(err);
		}
		console.log('Archivo creado con éxito');
	});
};

module.exports.crearArchivoCalculator = function (result) {
	fs.writeFile('./log.txt', result, function (err) {
		if (err) {
			return console.log(err);
		}
		console.log('Archivo creado con éxito');
	});
};
