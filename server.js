import express from 'express'
import morgan from 'morgan'
import path from 'path'
import dotenv from 'dotenv'
dotenv.config()

const PORT = pgrocess.env.PORT

const app = express()

app.listen(PORT, () => {
    console.log('Server is running')
})

