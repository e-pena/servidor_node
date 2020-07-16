function sumar(n1, n2) {
	result = n1 + n2;
	console.log(result);
	return result;
}
function restar(n1, n2) {
	result = n1 - n2;
	console.log(result);
	return result;
}
function multiplicar(n1, n2) {
	result = n1 * n2;
	console.log(result);
	return result;
}
function dividir(n1, n2) {
	result = n1 / n2;
	console.log(result);
	return result;
}

module.exports = {
	sumar,
	restar,
	multiplicar,
	dividir,
};
