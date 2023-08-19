const express = require("express");
const app = express();
const sequelize = require('./config/database')

app.use(express.json());

// config ejs
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use('/index', require('./models/models'));
sequelize.sync()
.then(() => {
    console.log('Nickel');
})
.catch((err) => {
    console.log(erreur);
});

// BDD 
const mysql = require('mysql');
const connect = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "projet_dwwm",
});
