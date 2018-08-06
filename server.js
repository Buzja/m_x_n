const express = require('express');
const mongoClient = require('mongodb').MongoClient;
const bodyParser = require('body-parser');
const db = require('./config/db');
const app = express();
const port = '3000';

app.use(bodyParser.urlencoded({extended: true}));
mongoClient.connect(db.url, (err,database)=>{
    if(err) return console.log(err);
    require('./app/routes')(app,database.db('serodb'));
    app.listen(port,()=>{
    console.log(`Server listening port ${3000}`);  
    });
})
