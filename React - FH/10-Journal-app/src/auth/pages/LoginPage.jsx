import {useDispatch} from "react-redux"
import { Link as RouterLink } from "react-router-dom"
import { Google } from "@mui/icons-material"
import { Grid, Typography, TextField, Button, Link } from "@mui/material"
import { AuthLayout } from "../layout/AuthLayout"
import { useForm } from "../../hooks"
import { checkingAuthentication, startGoogleSignIn } from "../../store/auth/thunks"

export const LoginPage = () => {

  const dispatch = useDispatch()
  
  const {email,password,onInputChange} = useForm({
    email: '',
    password: ''
      
  })

  const onSubmit = (event) =>{
    event.preventDefault();
    console.log({email,password})
    dispatch(checkingAuthentication())
  }

  const onGoogleSignIn = () =>{
    console.log('onGoogleSignIn')
    dispatch(startGoogleSignIn())

  }
  return (


    <AuthLayout title="Iniciar Sesión">

      <form onSubmit={onSubmit}>
        <Grid container>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField

              label="Correo"
              type="email"
              placeholder="correo@google.com"
              name="email"
              value={email}
              onChange={onInputChange}
              fullWidth
            />

          </Grid>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField

              label="Contraseña"
              type="password"
              placeholder="Contraseña"
              name="password"
              value={password}
              onChange={onInputChange}
              fullWidth
            />

          </Grid>

          <Grid container spacing={2} sx={{ mb: 2, mt: 1 }}>
            <Grid item xs={12} sm={6}>
              <Button type="submit" variant="contained" fullWidth>
                Iniciar Sesión
              </Button>

            </Grid>
            <Grid item xs={12} sm={6}>
              <Button variant="contained" fullWidth onClick={onGoogleSignIn}>
                <Google />
                <Typography sx={{ ml: 1 }}>
                  Google
                </Typography>
              </Button>

            </Grid>

          </Grid>

          <Grid container direction='row' justifyContent='end'>
            
            <Link component={RouterLink} color='inherit' to="/auth/register">
              Crear una cuenta
            </Link>

          </Grid>

        </Grid>

      </form>
    </AuthLayout>

  )
}
