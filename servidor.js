const express = require('express');
const app = express();
const users = require('./servicios/users');

app.get('/users', (req, res) => {
	let result = users.getUsers();

	res.status(200);
	res.json(result);
});

app.get('/users/:comision', (req, res) => {
	let data = req.params;
	let result = users.getUsersPorComision(data);
	res.status(200);
	res.json(result);
});

app.listen(3000, () => {
	console.log('Servidor iniciado');
});
