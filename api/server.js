// Variables and Functions
// ***************************************
const dataUri = './data/gardem.json'
const dataFile     = require(dataUri)

const express = require('express')
const cors    = require('cors')
const fs      = require('fs')

const app = express()
app.use(express.json())
app.use(cors())
const PORT = 4000

const jsonWrite = () => fs.writeFile(
    dataUri, 
    JSON.stringify(dataFile), 
    (err) => console.log(err))

const queryLookUp = () => {
    const queryFind   = dataFile.find(databaseQuery => databaseQuery.title ? databaseQuery.title === request.query.title : console.log('no title found'))
    const queryIndex  = dataFile.indexOf(queryFind)
    return queryIndex;
}
  

// Action
// ***************************************
app.get("/json", (request, response) => {
    response.send(dataFile)
})

app.post('/', (request, response) => {
    if(request.body) {
        dataFile.push(request.body)    
        jsonWrite()
        response.send('updated.')
    } else { response.send(`no body loves me--jk!`) }
})

app.put('/', (request, response) => {
    const requestTitle = request.query.title
    const queryFind    = dataFile.find(databaseQuery => databaseQuery.title ? databaseQuery.title === requestTitle : console.log('no title found'))
    const queryIndex   = dataFile.indexOf(queryFind)

    /* splice() to add */
    dataFile[queryIndex] = request.body
    jsonWrite()
    response.send('found and updated')
})

app.delete('/', (request,response ) => {
    const requestTitle = request.query.title
    const queryFind    = dataFile.find(databaseQuery => databaseQuery.title ? databaseQuery.title === requestTitle : console.log('no title found'))
    const queryIndex   = dataFile.indexOf(queryFind)

    dataFile.splice(queryIndex,1)
    jsonWrite()
    response.send('deleted')
})

app.get("/", (request, response) => {
    response.send('API running in root.')
})

app.listen(PORT, () => {
    console.log(`API listening to port ${PORT}`)
})