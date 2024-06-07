import { useCounter,useFetch } from "../hooks/"
import LoadingQuote from "./components/LoadingQuote"
import Quote from "./components/Quote"

export const MultipleCustomHooks = () => {

    const {increment,counter} = useCounter()

    const { data, isLoading, hasError } = useFetch('https://api.breakingbadquotes.xyz/v1/quotes/'+counter)

    const {author,quote} = !!data && data[0]

    console.log(data)



    return (
        <>

            <h1>Breaking Bad Quotes</h1>
            <hr />

            {
                isLoading
                    ? (
                        <LoadingQuote />
                            
                    )
                    :
                    (
                        <Quote author={author} quote={quote}/>
                                        
                    )
            }

            <button onClick={()=>{increment(1)}} className="btn btn-primary">Next Quote</button>







        </>
    )
}
