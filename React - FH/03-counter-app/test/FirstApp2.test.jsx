import { getAllByText, getByText, render,screen } from "@testing-library/react"
import { FirstApp } from "../src/FirstApp"

describe('Pruebas en FirstApp',()=>{

    const title = 'hola soy goku'
    const subTitle = 'Soy un subtitutlo'

    test('Debe de hacer match con el snapshot',()=>{

        

        const {container} = render(<FirstApp title={title} />)
        expect(container).toMatchSnapshot();
    })

    test('Debe de mostrar el mensaje "Hola soy Goku',()=>{

        render(<FirstApp title={title}/>)
        expect(screen.getByText(title)).toBeTruthy()
    })

    // test('debe mostrar el titutlo en un h1',()=>{
    //     render(<FirstApp title={title}/>)
    //     expect(screen.getByRole('heading',{level:1}).innerHTML).toContain(title)
    // })


    test('debe mostrar el subtitulo enviado por props',()=>{
        
        render(
        <FirstApp 
        title={title} 
        subTitle={subTitle}
        />
        )

        expect(screen.getAllByText(subTitle).length).toBe(1)
    })

})