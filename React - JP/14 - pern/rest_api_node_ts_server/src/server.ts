import express from 'express'
import swaggerUi from 'swagger-ui-express'
import swaggerSpec,{swaggerUiOptions} from './config/swagger'
import router from './router'
import db from './config/db'


//conectar a base de datos

export async function connectDB(){
    try {
        await db.authenticate()
        db.sync()
        // console.log(colors.bgGreen.white('conexion exitosa a la bd'))
        
    } catch (error) {


        console.log('hubo un error al coenctar a la BD')
        
    }
}

connectDB()

//Leer datos de formularios
const server = express()

server.use(express.json())


server.use('/api/products',router)

//Docs

server.use('/docs',swaggerUi.serve,swaggerUi.setup(swaggerSpec,swaggerUiOptions))

// server.get('/api',(req,res)=>{
//     res.json({msg:'Desde Api'})
// })

export default server