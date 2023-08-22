const express = require("express");
const app = express();
const sequelize = require('./config/database')

app.use(express.json());

// config ejs
app.set('view engine', 'ejs');

//app.use('/index', require('./models/models'));
sequelize.sync()
.then(() => {
    console.log('Nickel');
})
.catch((err) => {
    console.log(erreur);
});
//

const port = 8080;
app.listen(port, () => {
    console.log('bon')
});
