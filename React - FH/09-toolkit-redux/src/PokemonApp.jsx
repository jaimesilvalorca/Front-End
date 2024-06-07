import { useEffect } from "react"
import {useDispatch,useSelector} from 'react-redux'
import { getPokemons } from "./store/slices/pokemon";


const PokemonApp = () => {

  const dispatch = useDispatch();

  
  const {isLoading,pokemons,page} = useSelector(state=> state.pokemons)
  // const {isLoading} = useSelector(state=> state.isLoading)
  useEffect(() => {
    dispatch(getPokemons());  

  }, [dispatch])
  

  
  
  return (
    <>
    <h1>Pokemon App</h1>
    <hr />
    <span>Loading:{ isLoading ? 'true': 'false'}</span>
    <ul>
    {
      pokemons.map(pokemon=>
        <li key={pokemon.url}>{pokemon.name}</li>)
    }
     </ul>
   
    <button
    onClick={()=>dispatch(getPokemons(page))}
    >
Siguiente
    </button>
    

    </>

  )
}

export default PokemonApp