

const express = require('express');
const router = express.Router();
let jennysData = require('../data/data.json');

router.get('/albums',(req,res)=>{
    res.render('albums',{
        jennysData:jennysData,
        albumDetails:[],
        
    })
})

router.get('/albums/:index',(req,res)=>{
    let album = req.params.index;
    
    res.render('albums',{
        jennysData:jennysData,
        albumDetails:jennysData.albums[album],

    })

})

module.exports = router;