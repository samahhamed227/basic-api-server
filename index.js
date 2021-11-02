'use strict';

const server = require('./src/server');

const { db } = require('./src/models/index');
//the port should be from the .env file
db.sync()
    .then(() => {
        server.start(process.env.PORT || 3000);
    })
    .catch(console.error);