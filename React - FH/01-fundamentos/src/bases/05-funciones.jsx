const saludar = function (nombre) {
    return `Hola, ${nombre}`
}

const saludar2 = (nombre2) => {
    return `Hola, ${nombre2}`
}

const saludar3 = (nombre) => `Hola,${nombre}`

const saludar4 = () => 'Hola mundo'


console.log(saludar('Goku'))
console.log(saludar2('Vegeta'))
console.log(saludar3('Gohan'))
console.log(saludar4())

const getUser = () => {
    return {
        uid: 'ABC123',
        username: 'Elpapi1502'
    }
}

const user = getUser();
console.log(user)


//1.Transformar a un funciton de flecha
//2. Tiene que retornar un objeto implicito
// function getUsuarioActivo(nombre){
//     return{
//         uid:'ABC567',
//         username:nombre
//     }
// }

const getUsuarioActivo = (nombre) => ({
    uid: 'ABC567',
    username: nombre
})

const usuarioActivo = getUsuarioActivo('Fernando')
console.log(usuarioActivo)

