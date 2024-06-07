import { getAllByText, getByText, render } from "@testing-library/react"
import { FirstApp } from "../src/FirstApp"

describe('Pruebas en FirstApp',()=>{


    test('Debe de hacer match con el snapshot',()=>{

        const title = 'hola soy goku'
        const {container} = render(<FirstApp title={title} />)

        expect(container).toMatchSnapshot();
    })

    test('debe de mostrar el titulo en un h1',()=>{

        const title = 'Hola soy Goku';

        const {container,getByText,getByTestId}= render(<FirstApp title={title} />)

        expect(getByText(title)).toBeTruthy();
        // const h1 = container.querySelector('h1')
        // console.log(h1.innerHTML)

        expect(getByTestId('test-title').innerHTML).toBe(title)
    })

    test('debe mostrar el subtitulo enviado por props',()=>{
        const title = 'hola soy goku'
        const subTitle = 'Soy un subtitutlo'
        const {getAllByText} = render(
        <FirstApp 
        title={title} 
        subTitle={subTitle}
        />
        )

        expect(getAllByText(subTitle).length).toBe(1)
    })
})