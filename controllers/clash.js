
const { getCards } = require('../routes/clash-royale')
const { instance } = require("../helpers/apiClash");
// const {parse, stringify, toJSON, fromJSON} = require('flatted')


const clashCards = async (req, res) => {



    try {

        const {data} = await instance.get("")
        console.log(data)
        const cards = data.items
        console.log(cards)
     
        res.status(200).json({
            ok: true,
            resp:cards
        })

    } catch (error) {
      
    }

}




module.exports = { clashCards }