import { KeyboardAvoidingView, Text, TouchableOpacity, View } from 'react-native'
import Input from '../../components/input/Input'
import styles from './Styles'
import { useEffect, useState } from 'react'
import { useSignUpMutation } from '../../services/authService'
import { useDispatch } from 'react-redux'
import { setUser } from '../../features/authSlice'
import { signupSchema } from '../../validations/signupSchema'
const SignupScreen = ({ navigation }) => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [emailError, setEmailError] = useState("")
    const [passwordError, setPasswordError] = useState("")
    const [confirmPasswordError, setConfirmPasswordError] = useState("")

    const [triggerSignup, result] = useSignUpMutation()

    const onSubmit = () => {
        setEmailError("")
        setPasswordError("")
        setConfirmPasswordError("")
        try {
            signupSchema.validateSync({ email, password, confirmPassword }, { abortEarly: false })
            triggerSignup({ email, password })
        } catch (error) {
            error.errors.map(e => {
                console.log(Object.keys(e)[0])
                const customError = Object.values(e)[0]
                switch (Object.keys(e)[0]) {
                    case "empty_email":
                        setEmailError(customError)
                    case "invalid_email":
                        setEmailError(customError)
                    case "empty_password":
                        setPasswordError(customError)
                    case "invalid_password":
                        setPasswordError(customError)
                    case "invalid_confirm_password":
                        setConfirmPasswordError(customError)
                    case "invalid_match_password":
                        setConfirmPasswordError(customError)
                    default:
                        break;
                }
            })
        }

    }

    const dispatch = useDispatch()

    useEffect(() => {
        if (result.data) {
            dispatch(setUser(result.data))
        }


    }, [result])


    return (
        <KeyboardAvoidingView style={styles.container} behavior='height'>
            <Input
                label="Email: "
                onChange={setEmail}
                error={emailError}
            />
            <Input
                label="Contraseña"
                onChange={setPassword}
                isSecureEntry={true}
                error={passwordError}
            />
            <Input
                label="Repetir Contraseña"
                onChange={setConfirmPassword}
                isSecureEntry={true}
                error={confirmPasswordError}
            />
            <TouchableOpacity
                style={styles.btn}
                onPress={onSubmit}
            >
                <Text style={styles.btnText}>Registrarme</Text>
            </TouchableOpacity>
            <View style={styles.altContainer}>
                <Text style={styles.subtitle}>¿ya tienes una cuenta?</Text>
                <TouchableOpacity onPress={() => { navigation.navigate("Login") }}>
                    <Text style={styles.subtitleLink}>Ingresar</Text>
                </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>
    )
}

export default SignupScreen

