import express from 'express'
import dotenv from 'dotenv'

dotenv.config()

const app = express()

app.get('/', (req, res) => res.json({
    version: '1.0'
}))

app.listen(process.env.PORT, () => console.log(`Server is running at port ${process.env.PORT}`))