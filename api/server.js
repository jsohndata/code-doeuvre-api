/*
touch .gitignore
    node_modules 
    package.json 
    package-lock.json
    
npm -y init
npm install cors express
*/

// Setup and Functions
// ***************************************
const databaseJson = require('./database.json')

const express = require('express')
const cors    = require('cors')
const fs      = require('fs')

const PORT    = 4000
const app     = express()

app.use(cors())
app.use(express.json())

// Routing
// ***************************************
app.listen(PORT, () => {
    console.log(`API listning to port ${PORT}`)
})

app.get("/", (request, response) => {
    response.send('API running in root.')
})

app.get("/json", (request, response) => {
    response.send(databaseJson)
})