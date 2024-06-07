import { fireEvent, render,screen } from "@testing-library/react";
import { CounterApp } from "../src/CounterApp";


describe('Pruebas en FirstApp',()=>{

    const initialValue=10


    test('Debe de hacer match con el snapshot',()=>{

        const {container} = render(<CounterApp value={initialValue}/>)

        expect(container).toMatchSnapshot();
    })

    test('Debe mostrar el valor inicial de 100',()=>{

        render(<CounterApp value={100}/>)
        expect(screen.getByText('100')).toBeTruthy()
    })

    test('debe de incrementar con el boton +1',()=>{

        render(<CounterApp value={initialValue}/>)
        fireEvent.click(screen.getByText('+1'))
        expect(screen.getByText('11')).toBeTruthy()
    })

    test('debe de decrementar con el boton -1',()=>{

        render(<CounterApp value={initialValue}/>)
        fireEvent.click(screen.getByText('-1'))
        expect(screen.getByText('9')).toBeTruthy()
    })

    test('debe resetear con el boton reset',()=>{
        render(<CounterApp value={initialValue}/>)
        fireEvent.click(screen.getByText('+1'))
        fireEvent.click(screen.getByText('+1'))
        // fireEvent.click(screen.getByText('reset'))

        // expect(screen.getByText(10)).toBeTruthy();

        fireEvent.click(screen.getByRole('button',{name:'btn-reset'}))
        
    })


})