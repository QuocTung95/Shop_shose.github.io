var express = require('express');
const db = require('../models')
const brands = db.brands;
const typeProducts = db.typeProducts
// const TypeProducts = db.TypeProducts;

var cors = require('cors')
var bodyParser = require('body-parser');
var fs = require('fs');
const router = express.Router();
router.use(bodyParser.json()); // for parsing application/json
router.use(bodyParser.urlencoded({ extended: false })); // for parsing application/x-www-form-urlencoded








router.get('/brands', cors(), async (req, res, next) => {

    try {
        const response = await brands.findAll();
        res.status(200).json({ response})
    } catch (error) {
        throw Error(error.message)
    }
})

router.get('/brands/:id', async (req, res) => {
    const { id } = req.params;
    try {
        let brand = await brands.findAll({
            // attributes: ['name'],
            where: {
                id: id
            },
            include: {
                model: typeProducts,
                as: 'typeProducts',
                required: false
            }
        });
        if (brand.length > 0) {
            res.json({
                result: 'ok',
                data: brand[0],
                message: "query list of brand successfully"
            });
        } else {
            res.json({
                result: 'failed',
                data: {},
                message: "Cannot find brand to show"
            });
        }

    } catch (error) {
        res.json({
            result: 'failed',
            data: {},
            message: `query list of brand(by id) failed. Error: ${error}`
        });
    }
});

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