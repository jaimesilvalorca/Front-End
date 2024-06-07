import { Text, TouchableOpacity, View } from 'react-native'
import Input from '../../components/input/Input'
import styles from './Styles'
import { useLoginMutation } from '../../services/authService'
import { useEffect, useState } from 'react'
import {useDispatch} from 'react-redux'
import { setUser } from '../../features/authSlice'
import { insertSession } from '../../db'

const LoginScreen = ({ navigation }) => {

    const [email,setEmail] = useState("")
    const [password, setPassword] = useState("")

    const [triggerLogin, result] = useLoginMutation()

    const onSubmit = () =>{
        triggerLogin({email,password})
    }

    const dispatch = useDispatch()
    
    useEffect(()=>{
        if(result.data){
            dispatch(setUser(result.data))
            insertSession({
              localId: result.data.localId,
              email: result.data.email,
              token: result.data.idToken
          })
          .then(result=>console.log("Éxito al guardar sesión: ", result))
          .catch(error=>console.log("Error al guardar sesión: ", error.message))
        }

    }, [result])
    

    return (
        <View style={styles.container}>
            <Input
                label="Email: "
                onChange={setEmail}
            />
            <Input
                label="Contraseña"
                onChange={setPassword}
                isSecureEntry={true}
                error=""
            />
            <TouchableOpacity
                style={styles.btn}
                onPress={onSubmit}
            >
                <Text style={styles.btnText}>Ingresar</Text>
            </TouchableOpacity>
            <View style={styles.altContainer}>
                <Text style={styles.subtitle}>¿No tienes una cuenta?</Text>
                <TouchableOpacity onPress={() => { navigation.navigate("Signup") }}>
                    <Text style={styles.subtitleLink}>Crear</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default LoginScreen

