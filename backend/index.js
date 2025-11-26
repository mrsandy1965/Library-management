const express = require('express');
require('dotenv').config({quiet:true});
const app = express()
const port = process.env.PORT;
const cors = require('cors');
const router = require('./routes/routes')
app.use(cors());
app.use(express.json());


app.use('/api/v1/catalog',router)

app.get('/',(req,res)=>{
    res.send('Hello World!')
})

app.listen(port,()=>{
    console.log(`Server is running.... http://localhost:${port}`);
})