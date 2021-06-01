

const express = require('express');
const router = express.Router();
let jennysData = require('../data/data.json');
let albums = jennysData.albums;


router.get('/albums',(req,res)=>{
    res.render('albums',{
        jennysAlbums:albums,
        albumDetails:null,
        pageTitle:"Albums"

    })
    
})

router.get('/albums/:index',(req,res)=>{
    let index = req.params.index;
    
    res.render('albums',{
        
        jennysAlbums:albums,
        albumDetails:albums[index],
        pageTitle:`Albums - ${albums[index].name} `
        

    })

})

module.exports = router;