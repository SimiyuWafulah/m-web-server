import express from 'express'
import morgan from 'morgan'
import path from 'path'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import {fileURLTopath} from 'url'
dotenv.config()


//middlewares
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())
app.use(express.static(path.join(__dirname, 'public')))
app.set('view engine', 'ejs')

const PORT = process.env.PORT
const __filename = fileURLTopath(import.meta.utl)
const __dirname = path.dirname(__filename)

const app = express()

app.listen(PORT, () => {
    console.log('Server is running')
})

//database connection
mongoose.connect(process.env.MONGO).then(() => {
    console.log('Connected to Database')
}).catch((err) => {
    console.log(err)
})


//error handling middleware
app.use((err, req, res, next) => {
    const statusCode = err.statusCode || '500'
    const message = err.message || 'Internal server Error'
    res.status(statusCode).json({
        success: false,
        statusCode,
        message
    })
})

