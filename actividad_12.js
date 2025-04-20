let personas = [
    { nombre: "Martin", sexo: "M", edad: 20 },
    { nombre: "fernada", sexo: "F", edad: 25},
    { nombre: "Tomas", sexo: "M", edad: 28},
    { nombre: "Maria", sexo: "F", edad: 24},
]; //asigna los objetos literales al array y su edad,nombre y sexo

let promedioedad =
personas.reduce((acc,p) => acc + p.edad, 0) / personas.length; //asigna la variable promedioedad y realiza la operacion necesaria

console.log("promedio de edad:", Math.round(promedioedad, 0)); //imprime el promedioedad

let mujeres = personas.filter((p) => p.sexo === "F"); //asigna la variable y separa a las personas del sexo femenino del sexo masculino

console.log("mujeres:", mujeres); //imprime la cantidad de mujeres

let mujermayor = mujeres.reduce(
    (mayor, p) => (p.edad > mayor.edad ? p : mayor),
    { edad: 0 }
); //asigna la variable mujermayor y realiza la operacion para hallar a la mujer mayor

console.log("mujer mayor:", mujermayor.nombre); //imprime mujermayor junto con el nombre

let hombres = personas.filter((p) => p.sexo === "M"); //asigna la variable y separa a las personas del sexo masculino del femenino
console.log("hombres:", hombres); //imprime hombres

let hombremenor = hombres.reduce(
    (menor, p) => (p.edad < menor.edad ? p : menor),
    { edad: Infinity}
); //asigna la variable hombremenor y realiza la operacion para hallar al hombre mas joven
console.log("hombre menor:", hombremenor.nombre); //imprime hombremenor junto con el nombre

let promedioedadmujeres =
mujeres.reduce((acc, p) => acc + p.edad, 0) / mujeres.length; //asigna la variable y realiza la operacion para hallar el promedio de mujeres

console.log("promedio de edad de mujeres:", Math.round(promedioedadmujeres, 0)); //imprime el promedio de mujeres