let palabra = "testeo" //asigna la palabra
console.log(palabra) //imprime la palabra
function contarletrasdistintas(palabra) { 
    const conteo = {} ;
    for (const letra of palabra) { //separa las letras distintas y las cuentas
        conteo[letra] = (conteo[letra] || 0) + 1;
    }
    return conteo; //regresa el resultado del conteo
}
let conteodeletrasdistintas = contarletrasdistintas("testeo"); //asigna el resultado de la funcion y le da el valor a la variable
console.log(conteodeletrasdistintas); //imprime conteo de letras