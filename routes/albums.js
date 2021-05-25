

const express = require('express');
const router = express.Router();
let jennysData = require('../data/data.json');
const ejsLint = require('ejs-lint');


// function songsToUl(array){
//     let songList = "";
//     for(let i = 0; i < array.length;i++){
//         let song = `<li>${array[i]}</li>`;
//         songList += song;
//     }
//     return songList;
// }


router.get('/albums',(req,res)=>{
    res.render('albums',{
        jennysData:jennysData,
    })
})

router.get('/albums/:index',(req,res)=>{
    let album = req.params.index;
    res.render('albums',{
        jennysData:jennysData,
    })
})

module.exports = router;