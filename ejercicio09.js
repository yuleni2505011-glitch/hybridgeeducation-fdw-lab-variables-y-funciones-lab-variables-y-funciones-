// Ejercicio 9: Calcular el promedio de 5 números
// Declara una función llamada "calcularPromedio" que acepte 5 parámetros "n1", "n2", "n3", "n4", "n5" y devuelva el promedio de los 5 números.

//escribe tu función aquí. Recuerda que el nombre de la función debe ser exactamente "calcularPromedio" y que debe recibir exactamente 5 parámetros


// Exporta la función para que pueda ser utilizada en las pruebas
function calcularPromedio(numero1, numero2, numero3, numero4, numero5) {
    return (numero1 + numero2 + numero3 + numero4 + numero5) / 5;
}

module.exports = { calcularPromedio };