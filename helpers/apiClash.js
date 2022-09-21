const axios = require('axios').default;


const apiURL = 'https://api.clashroyale.com/v1/cards'



const instance = axios.create({
    baseURL: apiURL,
 
    headers: {
        Authorization: 'Bearer ' + process.env.API_KEY
    }
});

module.exports = { instance }