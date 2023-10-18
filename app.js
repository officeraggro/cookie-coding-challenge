const express = require('express')
const cors = require('cors')
var cookieParser = require("cookie-parser");

const app = express()
const port = 8888

app.use(cors())
app.use(cookieParser())

app.get('/', (req, res) => {

    res.cookie("name", "foobar")
    if (req.cookies.name !== undefined) {
        res.status(200).send(`Hello, ${req.cookies.name}!`)
    } else {
        res.status(403).send('Come back with cookies!')
    }
})

app.listen(port, () => {
    console.log('Express server started on port ', port)
})