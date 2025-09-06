const express= require("express")
const router = express.Router()


router.get('/',async(req,res)=>{
    try {
        res.status(200).send("good request")
    } catch (er) {
        res.status(500).send("Interval server error")
        
    }
})

module.exports = router