import { getImagen } from "../../src/base-pruebas/11-async-await"

describe('Pruebas en 11-async-await.js',()=>{

    test('GetImagen debe retonar un url de la imagen',async()=>{

        const url = await getImagen()

        console.log(url)

        expect(url).toBe('string')
    })
})