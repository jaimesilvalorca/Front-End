import express from 'express'
import dotenv from 'dotenv'
import { connectDB } from './config/db'
import projectRoutes from './routes/projectRoutes'
import authRoutes from './routes/authRoutes'
import cors from 'cors'
import { corsCofing } from './config/cors'
dotenv.config()


connectDB()
const app = express()

app.use(cors(corsCofing))
app.use(express.json())


app.use('/api/auth',authRoutes)
app.use('/api/projects',projectRoutes)

export default app