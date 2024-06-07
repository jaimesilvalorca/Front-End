import { render, screen } from "@testing-library/react";
import { GifGrid } from "../../src/components/GifGrid";
import useFetchGifs from "../../src/hooks/useFetchGifs";


jest.mock('../../src/hooks/useFetchGifs')



describe('Prueba en el GifGrid', () => {

    const category = 'One Punch'

    test('Debe mostrar el loading inicialmente', () => {

        useFetchGifs.mockReturnValue({
            images:[],
            isLoading:true
        })

        render(<GifGrid category={category}/>)
        expect(screen.getByText('Cargando...'));
        expect(screen.getByText(category));
        
    });

    test('Debe de mostrar items cuando se cargan las imagenes useFetchGifs', () => {

        const gifs = [{
            id:'ABC',
            title:'Saitama',
            url:'https://localost/saitama.jpg'
        },{
            id:'1234',
            title:'Saitama2',
            url:'https://localost2/goku.jpg'
        }]
        

        useFetchGifs.mockReturnValue({
            images:[],
            isLoading:true
        })

        render(<GifGrid category={category}/>)
        
        
    });
    
});