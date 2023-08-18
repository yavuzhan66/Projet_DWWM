
const http = require('http');

const app = require('./app');

app.use(express.urlencoded({extended: true}));

const mysql = require('mysql');
const connect = mysql.createConnection({
    host:'localhost',
    user:'root',
    password: "",
    database: "projet_dwwm",
});

app.use(express.static("public"));

app.set('view engine', "ejs");
app.set('views' , "./views");
app.listen(8080, () => {
    console.log("le serveur redirige sur la page http://127.0.0.1.8080")
});

app.use(express.json());

