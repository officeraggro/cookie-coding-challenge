const express = require('express')

const app = express()
const port = 8888

app.get('/', (req, res) => {
    res.send('Hello doofus!')
})

app.listen(port, () => {
    console.log('Express server started on port ', port)
})