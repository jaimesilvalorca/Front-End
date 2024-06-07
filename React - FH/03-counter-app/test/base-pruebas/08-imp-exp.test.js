import { getHeroeById, getHeroesByOwner } from "../../src/base-pruebas/08-imp-exp";

describe('Pruebas en 08-imp-exp', () =>{

    test('GetHEROBYID debe retornar un heroe por ID',()=>{

        const id = 1;
        const hero = getHeroeById(id);


        expect(hero).toEqual({ id: 1, name: 'Batman', owner: 'DC' })

    })

    test('GetHEROBYID debe retornar un heroe por ID',()=>{

        const id = 100;
        const hero = getHeroeById(id);

        expect(hero).toBeFalsy()

    })

    test('GetHeroesByOwener debe retonar heroes DC',()=>{

        const owner= 'DC';
        const hero = getHeroesByOwner(owner);
        console.log(hero)
        expect(hero.length).toEqual(3)


    })

    test('GetHeroesByOwener debe retonar heroes Marvel',()=>{

        const owner= 'Marvel';
        const hero = getHeroesByOwner(owner);
        console.log(hero)
        expect(hero.length).toEqual(2)

    })


})