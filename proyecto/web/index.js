const express = require("express");
const mysql = require("mysql2");


const db = mysql.createConnection({
    
    host: "mariadb",
    user: "user",
    password: "pass123",
    database: "dbnube"

});

const app = express();

app.get("/", (req, res) =>{
    db.query("SELECT * FROM LOG", (err, rows)=>{
        if (err) return res.send("Error BD");
        res.send(rows);

    });

});

app.listen(3000);