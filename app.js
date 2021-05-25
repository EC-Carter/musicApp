const express = require('express');
const app = express();
app.use(express.static('public'));
let port = 3000;
app.set('view engine','ejs');

//handler
app.use(require('./routes/'));
app.use(require('./routes/albums'));


// app.get('*',(req,res)=>{
//     res.send("You have reached an error.")
// })

//server start
app.listen(port,() => {
console.log(`Server is running on port ${port}`);
})

