var express = require('express');
const db = require('../models')
const products = db.products;
const brands = db.brands;
const typeProducts = db.typeProducts
// const TypeProducts = db.TypeProducts;

var cors = require('cors')
var bodyParser = require('body-parser');
var fs = require('fs');
const router = express.Router();
router.use(bodyParser.json()); // for parsing application/json
router.use(bodyParser.urlencoded({ extended: false })); // for parsing application/x-www-form-urlencoded

var multer = require('multer');
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    // cb(null, 'image/')
    cb(null, './images/product/')
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname )
  }
})
var upload = multer({ storage: storage })






router.get('/products', cors(), async (req, res, next) => {

    try {
        const response = await products.findAll();
        res.status(200).json({ response})
    } catch (error) {
        throw Error(error.message)
    }
})
router.get('/products/:id', cors(), async (req, res, next) => {
    const {id} = req.params
    try {
        const response = await products.findOne({ where : {id}});
        res.status(200).json({ response})
    } catch (error) {
        throw Error(error.message)
    }
})
router.put('/products/:id', cors() , async (req, res, next) =>{
    const data = req.body;
    const {id} = req.params;
    const test = '';
    // Select * from shipper where id = id;
    try {
      const product = await products.findOne({ where: { id } })
      if (!product) {
        return res.status(400).json({ httpCode: 400, message: 'product khong ton tai trong he thong', name: "UPDATE_product_ERROR" })
      }
      const response = await products.update(data, { where: { id }, returning: true });
      if (response)
        res.status(200).json({ response: response, httpCode: 200 })
      else next();
    } catch (error) {
      throw Error(error.message)
    }
})

router.post('/upload', cors() , upload.single('images'), async (req, res) => {
    const data = req.body;
    // validation cho data
    try {
      // insert into products values (,);
      const response = await products.create(data);
      if (response) {
        res.status(200).json({ httpCode: 200, result: response })
      }
    } catch (error) {
      throw Error(error.message)
    }
})

// router.get('/upload', function(req, res) {
//   res.sendFile(__dirname + '/index.html');
// })


// router.get('/brands/:id', cors(), async (req, res, next) => {
//     const {id} = req.params;
//     try {
//         const response = await Brands.findAll({
//             // attributes
//             where : {id},
//             include : {
//                 model: TypeProducts,
//                 as: 'types',
//                 required: false
//             }
//         });
//         if (response.length > 0) {
//             res.json({
//                 result: 'ok',
//                 data: response[0],
//                 message: "query list of type successfully"
//             });
//         } else {
//             res.json({
//                 result: 'failed',
//                 data: {},
//                 message: "Cannot find Todo to show"
//             });
//         }
//     } catch (error) {
//         res.json({
//             result: 'failed',
//             data: {},
//             message: `query list of failed. Error: ${error}`
//         });
//     }
// })






module.exports = router;