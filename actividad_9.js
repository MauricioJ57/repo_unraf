const listanumeros=[1,2,3,4,5] // asignacion de array
console.log(listanumeros) // imprime la lista de numeros
function sumaArray(array) {
    return array.reduce((acc,num) => acc +num, 0); // realizacion de la suma de elementos
}
let resultado = sumaArray(listanumeros)
// asigna la funcion a la variable resultado
console.log(resultado) // imprime resultado
