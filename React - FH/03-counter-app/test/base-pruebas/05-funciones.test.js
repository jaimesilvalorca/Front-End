import { getUser, getUsuarioActivo } from "../../src/base-pruebas/05-funciones";

describe('Pruebas en 05-funciones',()=>{

    test('getUser debe retornar un objeto ',()=>{

        const testUser = {
            uid: 'ABC123',
            username: 'El_Papi1502'
        }

        const user = getUser();
        console.log(user)

        expect(testUser).toStrictEqual(user)




    })

    test('GetUsuarioActivo debe retornar un objeto',()=>{

        const nombre = 'Fernando'

        const user = getUsuarioActivo(nombre)

        expect(user).toStrictEqual({
            uid: 'ABC567',
            username: nombre

        })


    })

    })