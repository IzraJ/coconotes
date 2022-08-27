const express = require('express')
const app = express()
const cors = require('cors')
const MongoClient = require('mongodb').MongoClient
const { json } = require('express')
require('dotenv').config()

// Declare variables
let db,
    dbConnectionString = process.env.DB_STRING,
    dbName = 'taskdb',
    collection

MongoClient.connect(dbConnectionString)
    .then(client =>{
        console.log(`Conneted to Database`)
        db = client.db(dbName)
        
    })

// Middleware
app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(cors())

app.get('/',(request, response)=>{
    db.collection('tasks').find().toArray()
    .then(data => {
        response.render('index.ejs', { info: data })
    })
    .catch(error => console.error(error))
})

app.post('/addTask', (req,res) => {
    db.collection('tasks').insertOne({taskName: req.body.taskName})
    .then(result => {
        console.log('Task Added')
        res.redirect('/')
    })
    .catch(error => console.error(error))
})

app.put('/editTask', (request, response) => {
    db.collection('tasks').replaceOne({taskName: request.body.taskName },
    {taskName: request.body.taskNameS},{
        upsert: true
    })
    .then(result => {
        console.log('Edited Task')
        response.json('Edited Task')
        
    })
    .catch(error => console.error(error))

})

app.delete('/deleteTask', (request, response) => {
    db.collection('tasks').deleteOne({taskName: request.body.taskNameS})
    .then(result => {
        console.log('Task Deleted')
        response.json('Task Deleted')
    })
    .catch(error => console.error(error))

})
// Port Connection
app.listen(process.env.PORT || PORT, ()=>{
    console.log(`Server is running`)
})