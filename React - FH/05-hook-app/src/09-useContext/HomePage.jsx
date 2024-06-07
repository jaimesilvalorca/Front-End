import { useContext } from "react"
import { UserContext } from "./context/UserContext"

const HomePage = () => {

  const {user,setUser} = useContext(UserContext)
  return (
    <>
    <h1>HomePage</h1> <small>{user?.name}</small>
    <hr />
    <pre>
      {JSON.stringify(user,null,3)}
    </pre>

    <button
    className="btn btn-primary"
    onClick={()=>setUser({id:123,name:'Jaime Silva',email:'jaimesilvalorca@gmail.com'})}>

      Establecer usuario
    </button>
    </>
  )
}

export default HomePage