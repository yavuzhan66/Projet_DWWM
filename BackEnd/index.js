const express = require("express");
const app = express();
const sequelize = require('./config/database')

app.use(express.json());

// config ejs
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use('/home', require('./models/models'));
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

app.use(express.static("public"));

app.set('view engine', "ejs");
app.set('views', "./views");
app.listen(8080, ()=>{
    console.log("le serveur tourne sur la page http://127.0.0.1:8080")
});

app.use(express.json());

module.exports = {

}