
const http = require('http');

const app = require('./app');


const mysql = require('mysql');
const connect = mysql.createConnection({
    host:'localhost',
    user:'root',
    password: "",
    database: "projet_dwwm",
});