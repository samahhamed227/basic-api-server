'use strict';

module.exports = (req, res, next) => {
    console.log(`Request: " ${req.method} " & Requset Path: " ${req.path} "`);

    next();
}