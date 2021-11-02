'use strict';

const express = require('express');
const router = express.Router();
const {Clothes} = require('../models/index');



router.get('/clothes',  getAllClothess);
router.post('/clothes', createClothes);
router.get('/clothes/:id', getClothesById);
router.put('/clothes/:id', updateClothes);
router.delete('/clothes/:id', deleteClothes);

async function getAllClothess(req,res){
    let getClothes = await Clothes.findAll();
    res.status(200).json(getClothes);
  }

  async function getClothesById(req,res) {
    const id = parseInt(req.params.id) 
    const oneClothes = await Clothes.findOne({where : {id:id}})
    res.status(200).json(oneClothes)
}

  async function createClothes(req,res) {
    const clothesObject = req.body;
    const addClothes = await Clothes.create(clothesObject)
    res.status(201).json(addClothes)
    
}
async function updateClothes(req,res) {
    const id = parseInt(req.params.id);
    const updatObject = req.body; 
    const foundClothes = await Clothes.findOne({where:{id:id}})
    const updateClothes = await foundClothes.update(updatObject)
    res.status(201).json(updateClothes);    
}
  
async function deleteClothes(req,res) {
    const id = parseInt(req.params.id);     
    const deleteClothes = await Clothes.destroy({where:{id:id}})
    res.status(204).json(deleteClothes);    
}

module.exports = router;