

const express = require('express');
const router = express.Router();
let jennysData = require('../data/data.json');

router.get('/',(req,res)=>{
    res.render('index',{
        jennysData:jennysData,
        pageTitle:"The Wailin' Jennys"
    })
})

module.exports = router;