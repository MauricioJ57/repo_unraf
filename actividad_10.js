let array=[1,2,3,4,5,6,7,8,9,10]
console.log(array) //imprime la lista de numeros
function sumaparesarray(array) {
    return array
    .filter((num) => num % 2 === 0 ) //separa los numeros pares de los impares
    .reduce((acc,num) => acc + num, 0); //suma los elementos pares del array
}
let resultado = sumaparesarray(array) //asigna el resultado de la funcion a la variable resultado
console.log(resultado) //imprime resultado