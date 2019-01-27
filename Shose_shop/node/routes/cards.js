const express = require('express');
const router = express.Router();
const db = require('../models')
const cors = require('cors')
const Cards = db.cards;
// const { isValidEmail, isValidName } = require('../utils');

/* GET users listing. */
router.get('/cards', cors() , async (req, res, next) =>{
  try {
    const response = await Cards.findAll();
    res.status(200).json({ result: response, httpCode: 200 })
  } catch (error) {
    throw Error(error.message)
  }
});


// router.post('/upload', cors() ,  async (req, res) => {
//   const data = req.body;
//   // validation cho data


//   try {
//     // insert into shippers values (,); 
//     const response = await db.Shipper.create(data);
//     if (response) {
//       res.status(200).json({ httpCode: 200, result: response })
//     }
//   } catch (error) {
//     throw Error(error.message)
//   }
// })

module.exports = router;
