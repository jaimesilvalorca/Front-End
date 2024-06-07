
export const getImagen = async() => {

    try {

        const apiKey = 'VkXT16MITyFydcegS6zRCuVBZcSuiNnn';
        const resp   = await fetch(`http://api.giphy.com/v1/gifs/random?api_key=${ apiKey }`);
        const { data } = await resp.json(); 

        const { url } = data.images.original;

    } catch (error) {
        console.error(error)
        return 'No se encontró la imagen'
    }
    
    
    
}

 getImagen();



