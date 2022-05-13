const express = require('express')
const app = express()
const port = 3001

app.get('/', (req, res) => {
    res.send('I am auth service')
})

app.get('/auth', (req, res) => {
    console.log("Hitting auth endpoint");
    res.sendStatus(401);
})

app.listen(port, () => {
    console.log(`Auth service listening on port ${port}`)
})