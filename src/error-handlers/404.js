'use strict';

module.exports = (req , res) =>{
    const error = {
        status:404,
        message: 'not Found :('
    }
    res.status(404).json(error)
}