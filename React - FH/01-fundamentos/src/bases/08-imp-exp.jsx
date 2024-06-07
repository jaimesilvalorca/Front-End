import {heroes,owners} from "../data/heroes";




// find busca un valor especifico
export const getHeroById = (id) =>{
    return heroes.find(heroe=>heroe.id === id)
}

console.log(getHeroById(0))

// filter entrega todos los arguemntos
export const getHeroByOwener = (owner) =>{
    return heroes.filter(heroe=>heroe.owner === owner)
}

// console.log(getHeroByOwener('DC'))
// console.log(getHeroByOwener('Marvel'))