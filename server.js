const express = require('express');
const mongojs = require('mongojs');
const cors = require('cors')

const db = mongojs('todoApp', ['todos'])

const app = express()

app.use(express.json())
app.use(cors())

app.get('/data', (req, res)=> {
    db.todos.find((err, docs) => {
        res.send(docs)
    })
})

app.post('/create', (req, res) => {
    db.todos.insert({
        name: req.body.name, 
        description: req.body.description,
        status: req.body.status
    }, (err, data) => {
        if(err){
            console.log(err);
        }else{
            res.send('works fine');
        }
    })
})

app.post('/delete', (req, res) => {
    db.todos.remove({"_id": db.ObjectId(req.body.id)}, (err, data) => {
        if(err){
            console.log('error');
        }else{
            res.send('works fine');
        }
    })
})

app.post('/edit', (req, res) => {
    db.todos.update({"_id": db.ObjectId(req.body._id)}, {$set: {
        name: req.body.name,
        description: req.body.description
    }}, (err, data) => {
        if(err){
            console.log(err);
        }else{
            res.send('works fine');
        }
    })
})

app.post('/mark', (req, res) => {
    db.todos.update({"_id": db.ObjectId(req.body.id)}, {$set: {
        status: req.body.status
    }}, (err,data)=> {
        if(err){
            console.log(err);
        }else{
            res.send('works fine');
        } 
    })
}) 

app.listen(5000, () => {
    console.log('Server running on port 5000');
})