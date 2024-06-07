import { getHeroeByIdAsync } from "../../src/base-pruebas/09-promesas";

describe('Pruebas en 09-promesas',()=>{

    test('GetHeroeByIdAsync debe retornar un heroe',(done)=>{


        const id = 1;
        getHeroeByIdAsync(id).then(hero=>{

            expect(hero).toBe({
                id: 1,
                name: 'Batman',
                owner: 'DC'
            })

            done()

        })
    })

})