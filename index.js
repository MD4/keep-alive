const http = require("http")
const express = require('express')

const HOST = process.env.HOST || 'http://localhost:3000'
const PORT = process.env.PORT || 3000

const app = express()

app.get('/', (req, res) => {
  console.log('GET / 200')
  res.send('Hello World!')
})

app.listen(PORT, () => console.log(`Listening on port ${PORT}!`))

setInterval(() => http.get(HOST), 300000) // every 5 minutes (300000)

