// Arreglos JS
//para crear la cantidad necesria que necesites
// const arreglo = new Array(1);

const arreglo = [1,2,3,4];
// no usar push en react
// arreglo.push(1);
// arreglo.push(2);
// arreglo.push(3);
// arreglo.push(4);

let arreglo2 = [...arreglo,5]

//el map no modifica el arreglo original
const arreglo3 = arreglo2.map(function(numero){
    return numero*2
})

console.log(arreglo)

console.log(arreglo2)

console.log(arreglo3)

console.log(arreglo2)
