const mockAPIResponse = require('./mockAPI.js')
let projectData = {}
const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const cors = require('cors')


app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use(cors())

app.use(express.static('website'))
const API_KEY = 'e252c7b979260bc626024454b282e9a2'




let userInput = [] // const does not work

app.get('/', function (req, res) {
  // res.sendFile('dist/index.html')
  res.sendFile(path.resolve('src/client/views/index.html'))
})


app.get('/test', function (req, res) {
  res.send(mockAPIResponse)
})
function returnProjectData (req, res) {
  res.send(projectData)
}
app.get('/all', returnProjectData)

app.post('/addDatatoServer', addIncomingData)
console.log(projectData);
function addIncomingData (req, res) {
  projectData['polarity'] = req.body.polarity
  projectData['agreement'] = req.body.agreement
  projectData['subjectivity'] = req.body.subjectivity
  projectData['irony'] = req.body.irony
  res.send(projectData)
}

