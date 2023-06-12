const path = require('path')
const express = require('express')
const bodyParser = require('body-parser')
const fetch = require('node-fetch')
const mockAPIResponse = require('./mockAPI.js')
const dotenv = require('dotenv')
const cors = require('cors')
const app = express()

dotenv.config()

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(express.static('dist'))
app.listen(3000, function () {
  console.log('Im listening on port 3000!')
})

const baseURL = 'https://api.meaningcloud.com/sentiment-2.1?'
const apiKey = process.env.API_KEY
let dataFromForm = []

app.get('/', function (req, res) {
  // res.sendFile('dist/index.html')
  res.sendFile(path.resolve('src/client/views/index.html'))
})

app.get('/test', function (req, res) {
  res.send(mockAPIResponse)
})

app.post('/api', async function (req, res) {
  dataFromForm = req.body.url
  const response = await fetch(`${baseURL}key=${apiKey}&url=${dataFromForm}&lang=en`)
  const resData = await response.json()
  res.send(resData)
})
