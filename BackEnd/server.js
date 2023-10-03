const express = require("express");
const connectDB = require("./config/db");
const dotenv = require('dotenv').config();
const port = 3000;

//connexion à la DB
connectDB();

const app = express();


//middlewares qui permet de traiter les données de la request
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/post", require("./routes/post.routes"));

//lancer le server
app.listen(port, () => console.log("Le serveur à démarré au port " + port));