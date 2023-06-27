const express = require('express');
const routes = require('./routes');
const sequelize = require('./database/db');

const app = express();
const PORT =  3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);

sequelize.sync({ force: false }).then(() => {
app.listen(PORT, () => console.log('App running port:' + PORT));
});