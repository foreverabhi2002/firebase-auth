const express = require('express')
const bodyParser = require('body-parser')
const app = express()

const authRoutes = require('./routes/auth')

app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }))

app.use('/auth', authRoutes)

const PORT = 3000
app.listen(PORT, () => {
    console.log(`Running on ${PORT}`);
})