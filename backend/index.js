const express = require('express')
const app = express()
const cors = require('cors')
const bodyParser = require('body-parser')
const mysql = require('mysql2')
const db = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'chotter-database',
});

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}));

// app.get('/', (req, res) =>{
//     // const sqlInsert = "INSERT INTO posts (name, description) VALUES ('Im having a hard time', 'Today has been such a bad day. Please help me.');"
//     // db.query(sqlInsert, (err, result) => {
//     //     if(err) {
//     //         console.log(err);
//     //         res.send(err.toString()); 
//     //      }
//     //     res.send("We are Inserting");
//     // });
    
// });

app.post('/addpost', (req, res) =>{
    const name = req.body.name;
    const description = req.body.description;
    const sqlInsert = "INSERT INTO posts (name, description) VALUES (?,?);"
    db.query(sqlInsert, [name, description], (err, result) => {
        if(err) {
            console.log(err);
            res.send(err.toString()); 
         }else{
            console.log(result);
         }
    });
    
});

app.get('/getposts', (req, res) =>{
    const sqlSelect = "SELECT * FROM posts;"
    db.query(sqlSelect, (err, result) => {
        if(err) {
            console.log(err);
            res.send(err.toString()); 
         }else{
            console.log(result);
            res.send(result);
         }
    });
    
});

app.get('/searchpost', (req, res) =>{
    const name = req.body.name;
    const sqlSelect = "SELECT name FROM chotter-database WHERE name=?;"
    db.query(sqlSelect, [name], (err, result) => {
        if(err) {
            console.log(err);
            res.send(err.toString()); 
         }else{
            res.send(result);
         }
    });
    
});


app.listen(3001, () =>{
    console.log("running on port 3001");
});