const fs = require('fs');

module.exports.leerArchivo = function (nombreArchivo) {
	fs.readFile('./test.txt', 'utf-8', (err, data) => {
		if (err) {
			return console.log(err);
		} else {
			let texto = data.toUpperCase();
			fs.writeFile(`./${nombreArchivo}`, texto, function (err) {
				if (err) {
					return console.log(err);
				}
				console.log('Archivo modificado con éxito');
			});
		}
	});
};
