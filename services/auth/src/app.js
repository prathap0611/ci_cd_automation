const express = require('express')
const app = express()
const port = 3001

app.get('/', (req, res) => {
    res.send('I am auth service')
})

app.get('/auth', (req, res) => {
    console.log("Hitting auth endpoint");
    console.log(JSON.stringify(req.headers));
    res.header('clientId', 'some client id');
    res.sendStatus(200);
})

app.listen(port, () => {
    console.log(`Auth service listening on port ${port}`)
})