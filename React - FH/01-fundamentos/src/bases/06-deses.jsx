//Desestructuracion
//Asignacion Desestructurante


const persona = {
    nombre:'Tony',
    edad:45,
    clave:'Ironman'
}

// const {nombre,edad,clave} = persona

// console.log(nombre)
// console.log(edad)
// console.log(clave)

console.log(persona)

const useeContextt = ({nombre,clave,edad,rango='Capitan'}) =>{


    return {
        nombreClave:clave,
        anios:edad,
        latlng:{
            lat:14.1232,
            lgn:-12.3232
        }
    }

}

const {nombreClave,anios,latlng:{lat,lgn}} = useeContextt(persona)

console.log(nombreClave,anios)
console.log(lat,lgn)