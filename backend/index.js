const express = require('express');
require('dotenv').config();
const app = express()
const port = process.env.PORT;
const cors = require('cors');
const router = require('./routes/booksroute')
app.use(cors());
app.use(express.json());


app.use('/catalog',router)

app.get('/',(req,res)=>{
    res.send('Hello World!')
})

app.listen(port,()=>{
    console.log(`Server is running.... http://localhost:${port}`);
})