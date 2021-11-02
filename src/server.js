'use strict';

const express = require('express');
const app = express();

const notFoundHandler = require('./error-handlers/404');
const errorHandler = require('./error-handlers/500');
const loggerMiddleware = require('./middleware/logger');

const foodRoutes = require('./routes/food');
const clothesRoutes = require('./routes/clothes')

app.use(express.json());
app.use(loggerMiddleware);
app.use(foodRoutes);
app.use(clothesRoutes);

app.get('/' , (req,res)=>{
    res.status(200).send("Every Thing Is Working Good :)")
})
app.get('/bad', (req, res, next) => {
    next('error from bad end point');
});

app.get('/status', (req, res) => {
    let statusOutput = {
        "domain": "samah-basic-express-server.herokuapp.com",
        "status": "running",
        "PORT ": 3000,
    }
    res.status(200).json(statusOutput)
})
app.use('*', notFoundHandler);
app.use(errorHandler);

module.exports = {
    server: app,
    start: port => {
        app.listen(port, () => console.log(`Server is up on port ${port}`));
    }
}