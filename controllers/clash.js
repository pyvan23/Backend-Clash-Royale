
const { getCards } = require('../routes/clash-royale')
const { instance } = require("../helpers/apiClash");
// const {parse, stringify, toJSON, fromJSON} = require('flatted')


const clashCards = async (req, res) => {



    try {

        const response = await instance.get("")
        
        const  items  = await response.data
        
        console.log(items);
        
        res.status(200).json({
            items
           
        })

    } catch (error) {

    }

}




module.exports = { clashCards }