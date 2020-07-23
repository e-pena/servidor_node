let alumnos = [
	{
		id: 1,
		nombre: 'LAlala',
		comision: 'DFWS',
	},
	{
		id: 2,
		nombre: 'LAlala',
		comision: 'DFWS',
	},
	{
		id: 3,
		nombre: 'LAlala',
		comision: 'DFWS',
	},
	{
		id: 4,
		nombre: 'LAlala',
		comision: 'DFWS6',
	},
	{
		id: 5,
		nombre: 'LAlala',
		comision: 'DFWS6',
	},
	{
		id: 6,
		nombre: 'LAlala',
		comision: 'DFWS6',
	},
	{
		id: 7,
		nombre: 'LAlala',
		comision: 'DFWS6',
	},
	{
		id: 8,
		nombre: 'LAlala',
		comision: 'DFWS6',
	},
	{
		id: 9,
		nombre: 'LAlala',
		comision: 'DFWS6',
	},
];

function getUsers() {
	return alumnos;
}

function getUsersPorComision(data) {
	let usuariosPorComision = alumnos.filter((a) => a.comision === data.comision);
	return usuariosPorComision;
}

module.exports = { getUsers: getUsers, getUsersPorComision: getUsersPorComision };
