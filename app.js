const express = require("express");
const path = require("path")
const app = express();
const cors=require('cors');
const port = process.env.PORT || 3000;
const User=require('./public/signup/userModel');
require("./db/conn.js");

const static_path= path.join(__dirname, 'public')
app.use(express.static(static_path))

// app.get('/',(req, res) => {
//     res.send("Hello!!");
// });

// app.use(cors({origin:['http://localhost:3000']}))
// app.use('*',(req,res,next)=>{
//     console.log(req);
//     next();
// })

app.get('/temp',(req,res,next)=>{
    res.status(200).json({name:'p'})
})
app.post('/test',async (req,res,next)=>{
    const user=await User.create(req.body);

    res.send(201).json({});
})


app.listen(port, ()=>{
    console.log(`The server is running at ${port}`);
});

