/*
touch .gitignore
    node_modules 
    package.json 
    package-lock.json
    
npm -y init
npm install cors express
*/

// Variables and Functions
// ***************************************
const databaseJsonFile = './database.json'
const databaseJson     = require(databaseJsonFile)

const express = require('express')
const cors    = require('cors')
const fs      = require('fs')

const PORT    = 4000
const app     = express()

app.use(cors())
app.use(express.json())

const jsonWrite = () => fs.writeFile(
    databaseJsonFile, 
    JSON.stringify(databaseJson), 
    (err) => console.log(err))

const queryLookUp = () => {
    const queryFind   = databaseJson.find(databaseQuery => databaseQuery.title ? databaseQuery.title === request.query.title : console.log('no title found'))
    const queryIndex  = databaseJson.indexOf(queryFind)
    return queryIndex;
}
  

// Action
// ***************************************
app.listen(PORT, () => {
    console.log(`API listening to port ${PORT}`)
})

app.get("/", (request, response) => {
    response.send('API running in root.')
})

app.get("/json", (request, response) => {
    response.send(databaseJson)
})

app.post('/', (request, response) => {
    if(request.body) {
        databaseJson.push(request.body)    
        jsonWrite()
        response.send('updated.')
    } else { response.send(`no body loves me--jk!`) }
})

app.put('/', (request, response) => {
    const requestTitle = request.query.title
    const queryFind    = databaseJson.find(databaseQuery => databaseQuery.title ? databaseQuery.title === requestTitle : console.log('no title found'))
    const queryIndex   = databaseJson.indexOf(queryFind)

    /* splice() to add */
    databaseJson[queryIndex] = request.body
    jsonWrite()
    response.send('found and updated')
})

app.delete('/', (request,response ) => {
    const requestTitle = request.query.title
    const queryFind    = databaseJson.find(databaseQuery => databaseQuery.title ? databaseQuery.title === requestTitle : console.log('no title found'))
    const queryIndex   = databaseJson.indexOf(queryFind)

    databaseJson.splice(queryIndex,1)
    jsonWrite()
    response.send('deleted')
})