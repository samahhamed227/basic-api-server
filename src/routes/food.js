'use strict';

const express = require('express');
const router = express.Router();
const {Food} = require('../models/index');

router.get('/food', getAllFoods);
router.post('/food', createFood);
router.get('/food/:id', getFood);
router.put('/food/:id', updateFood);
router.delete('/food/:id', deleteFood);

async function getAllFoods(req,res){
    let getFood = await Food.findAll();
    res.status(200).json(getFood);
  }
  
  async function getFood(req,res){
    let id =  parseInt(req.params.id);
    let getOne = await Food.findOne({ where: {id:id}});
    res.status(200).json(getOne);
  }
  
  async function createFood(req,res){
    let newFood = req.body;
  
    let creatFood = await Food.create(newFood);
    res.status(201).json(creatFood);
  
  }
  
  async function updateFood(req,res){
    let id = parseInt(req.params.id);
    let obj = req.body;
    let findFood =  await Food.findOne({ where: {id:id}});
    let updateFood = await findFood.update(obj);
    res.status(201).json(updateFood);
  }
  
  async function deleteFood(req,res){
    let id = parseInt(req.params.id);
    let deleteFood = await Food.destroy({where: {id:id}});
    res.status(204).json(deleteFood);
  }
  
  module.exports =router;