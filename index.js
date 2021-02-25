const express = require('express')
express.static('public')
const app = express()
app.use(express.static('public'))
const port = 8080

app.get('/', (req, res) => {
  res.send('Welcome to my server!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})