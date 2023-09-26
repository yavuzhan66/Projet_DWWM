/*/ BDD 
const mysql = require('mysql');
const connect = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "projet_dwwm",
});
*/

//mongoDB

const mongoose = require("mongoose");

const connectDB = async () => {
    try {
        mongoose.set("strictQuery", false);
        mongoose.connect(process.env.MONGO_URI, () =>
            console.log("Mongo connecté")
        );

    } catch (err) {
        console.log(err);
        process.exit();
    }
};

module.exports = connectDB;