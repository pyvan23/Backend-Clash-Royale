const { response } = require('express');
require('dotenv').config()
const express = require('express');
const { dbConnection }=require('./DB/config')
const cors = require('cors');

//server

const app = express();
//connection
dbConnection()
//cors
app.use(cors())

//public directory

app.use(express.static('public'))

//read and parse of body
app.use(express.json());

app.use('/api/auth',require('./routes/auth'))
app.use('/api/events',require('./routes/events'))
app.use('/api/clash', require('./routes/clash-royale'))

// const  axios  = require("axios");


// const apiURL = 'https://api.clashroyale.com/v1/cards'

// const config = {
//     headers:{
//         Authorization: 'Bearer ' + process.env.API_KEY
//     }
// }


// axios.get(apiURL,config).then(response=>{
//     console.log(response.data)
// })



app.listen(process.env.PORT,()=> {

console.log(`server run in port ${ process.env.PORT }`)
})