const { render,screen } = require("@testing-library/react")
const { GifItem } = require("../../src/components/GifItem")

describe('Pruebas en GifItem',()=>{

    const title = 'Saitama'
    const url = 'http://localhost/www.google.cl'

    test('Debe hacer match con el snapshot',()=>{
        

       const {container } =  render(<GifItem title={title} url={url} />)
       expect(container).toMatchSnapshot()
        
    })

    test('debe mostrar la imagen con el URL y el ALT indicado',()=>{

        render(<GifItem title={title} url={url} />)

        const { src , alt} = screen.getByRole('img')

        expect(src).toBe(url)
        expect(alt).toBe(title)

    })

    test('debe de mostrar el titulo en el componente',()=>{

        render(<GifItem title={title} url={url} />)
        expect(screen.getByText(title)).toBeTruthy();

    })
})