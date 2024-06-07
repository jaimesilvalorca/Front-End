import { getSaludo } from "../../src/base-pruebas/02-template-string";

describe('Pruebas en 02-templates-string',()=>{

    test('getSaludo debe retornar "Hola fernando herrera',()=>{

        const name = 'Fernando';
        const message = getSaludo(name)

        expect(message).toBe(`Hola ${name}`)

    })
})