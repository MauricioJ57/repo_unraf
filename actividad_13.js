let personas = [
    { nombre: "Martin", sexo: "M", edad: 20 },
    { nombre: "fernada", sexo: "F", edad: 25},
    { nombre: "Tomas", sexo: "M", edad: 28},
    { nombre: "Maria", sexo: "F", edad: 24},
]; //asigna los objetos literales al array y su edad,nombre y sexo

function obtenerpromedioedad(personas) { //realiza la funcion para obtener el promedio de edad
    return personas.reduce((acc,p) => acc + p.edad, 0) /personas.lenght;
}

function obtenermujermayor(personas) { //realiza la funcion para obtener a la mujer mas mayor
    return personas
    .filter((p) => p.sexo === "F")
    .reduce((mayor, p) => (p.edad > mayor.edad ? p : mayor), { edad: 0 });
}

function obtenerhombremenor(personas) { //realiza la funcion para obtener al hombre mas joven
    return personas
    .filter((p) => p.sexo === "M")
    .reduce((menor, p) => (p.edad < menor.edad ? p : menor), {
        edad: infinity,
    });
}

function obtenerpromedioedadmujeres(personas) { //raliza la funcion para obtener el promedio de mujeres
    return personas
    .filter((p) => p.sexo === "F")
    .reduce((acc, p, _, arr) => acc + p.edad / arr.lenght, 0);
}