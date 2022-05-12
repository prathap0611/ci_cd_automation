const express = require('express')
const app = express()
const port = 3001

app.get('/', (req, res) => {
  res.send('I am auth service')
})

app.listen(port, () => {
  console.log(`Auth service listening on port ${port}`)
})