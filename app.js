const express = require('express');
const app = express();
app.use(express.static('public'));
let port = 3000;
//let jennysData = require('./data')
app.set('view engine','ejs');

// function songsToUl(array){
//     let songList = "";
//     for(let i = 0; i < array.length;i++){
//         let song = `<li>${array[i]}</li>`;
//         songList += song;
//     }
//     return songList;
// }
//handler
app.use(require('./routes/'));
// app.get('/',(req,res)=>{
//     res.send(`
//     <h1>The Wailin' Jennys</h1>
//     <h2><a href="/albums">Albums</a></h2>
//     <img src="/images/jennys1.jpg" height="300px">
//     <p>${jennysData.bio.text1}</p>
//     <p>${jennysData.bio.text2}</p>
//     <p>${jennysData.bio.text3}</p>
//     <img src="/images/jennys2.jpeg" height="200px"><br><br>
//     <a href="${jennysData.bio.url}">Wailin' Jennys Wikipedia</a>
//     <br>
//     `)
// })
app.use(require('./routes/albums'))
// app.get('/albums',(req,res)=>{
//     res.send(`
//     <h2><a href="/">Home</a></h2>
//     <a href="/albums/0"><img src="${jennysData.albums[0].imgURL}" height="200px" alt=""></a>
//     <br>
//     <a href="/albums/1"><img src="${jennysData.albums[1].imgURL}" height="200px" alt=""></a>
//     <br>
//     <a href="/albums/2"><img src="${jennysData.albums[2].imgURL}" height="200px" alt=""></a>
//     <br>
//     <a href="/albums/3"><img src="${jennysData.albums[3].imgURL}" height="200px" alt=""></a>
//     <br>
//     <a href="/albums/4"><img src="${jennysData.albums[4].imgURL}" height="200px" alt=""></a>
    
//     `)
// })
// app.get('/albums/:index',(req,res)=>{
//     let i = req.params.index;
//     let songList = songsToUl(jennysData.albums[i].songTitles);
//     res.send(`
//     <h2><a href="/">Home</a></h2>
//     <h2><a href="/albums">Albums</a></h2>
//     <h1>${jennysData.albums[i].name}</h1>
//     <h5> Released: ${jennysData.albums[i].publishDate}</h5>
//     <h5>Label: ${jennysData.albums[i].label}</h5>
//     <img src="${jennysData.albums[i].imgURL}" height="350px" alt="">
//     <ul>${songList}</ul>
//     `);
// })
// app.get('*',(req,res)=>{
//     res.send("You have reached an error.")
// })

//server start
app.listen(port,() => {
console.log(`Server is running on port ${port}`);
})

