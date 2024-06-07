
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext';

export const LoginPage = () => {

  const { login } = useContext(AuthContext)

  const navigate = useNavigate();

  const onLogin = () => {

    const lastPath = localStorage.getItem('lastPath') || '/'

    login('Jaime Silva')


    navigate(lastPath, {
      replace: true
    })



  }
  return (
    <div className="container mt-5">
      <h1>LoginPage</h1>
      <hr />

      <button
        className="btn btn-primary"
        onClick={onLogin}
      >
        Iniciar Sesion

      </button>

    </div>

  )
}