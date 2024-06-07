const persona = {
    nombre:'Tony',
    apellido:'Stark',
    edad:45,
    direccion:{
        ciudad:'New york',
        zip:55321321,
        lat:14.3232,
        lgn:34.923321
    }
};




console.log(persona)

//JAMAS COPIAR LA REFERENCIA
const persona2 = {...persona}
//HACE UN CLON DEL OBJETO CON EL ESPACIO EN LA MEMORIA
persona2.nombre = 'Peter'

console.log(persona)
console.log(persona2)