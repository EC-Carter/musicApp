const express = require('express');
const app = express();
const socket = require('socket.io');

app.use(express.static('public'));
let port = 3000;
app.set('view engine','ejs');


//handler
app.use(require('./routes/'));
app.use(require('./routes/albums'));
app.use(require('./routes/feedback'));
app.use(require('./routes/chat'));


// app.get('*',(req,res)=>{
//     res.send("You have reached an error.")
// })

//server start
 let server = app.listen(port,() => {
console.log(`Server is running on port ${port}`);
})

let io = socket(server);
io.on('connection',(socket) => {
    socket.on('postMessage', msg =>{
        io.emit('updateMessage',msg)
    })
})

