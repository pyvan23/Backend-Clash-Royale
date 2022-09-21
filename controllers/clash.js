
const { getCards } = require('../routes/clash-royale')
const { instance } = require("../helpers/apiClash");
// const {parse, stringify, toJSON, fromJSON} = require('flatted')


const clashCards = async (req, res) => {



    try {
        const {data} = await instance.get("")

        const mapCards = data['items'].map(cards=>{
            return cards
        }
        
        )
        const nameImage = mapCards.filter(a=>{
            return a.name && a.iconUrls.medium
        })
        console.log(nameImage.iconUrls)
     

        res.status(200).json({
            ok: true,
            resp:mapCards
        })

    } catch (error) {
      
    }

}




module.exports = { clashCards }