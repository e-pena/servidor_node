const fs = require('fs');

module.exports.agregarTexto = function (result) {
	let archivoExistente = fs.stat('./log.txt', (err, stats) => {
		if (err) {
			return console.log(err);
		}
	});
	fs.appendFile('./log.txt', `\n${result}`, function (err) {
		if (err) {
			console.log(err);
		} else {
			console.log('Archivo actualizado');
		}
	});
};
