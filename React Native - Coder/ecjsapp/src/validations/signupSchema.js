import {object,ref,string} from 'yup'

export const signupSchema = object().shape({
    email:string()
    .required({"empty_email":"Por favor, indica tu email"})
    .email({"invalid_email":"El formato de email no es valido"}),
    password:string()
    .required({"empty_password":"Por favor, indica tu contraseña"})
    .min(6,{"invalid_password":"la contraseña debe tener 6 caracteres como minimo"}),
    confirmPassword:string()
    .required({"invalid_confirm_password":"Por favor confirma la contraseña"})
    .oneOf([ref('password'),null],{"invalid_match_password":"Las contraseñas deben ser iguales"})
})