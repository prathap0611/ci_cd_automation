const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('I am demo service')
})

app.listen(port, () => {
  console.log(`Demo service listening on port ${port}`)
})