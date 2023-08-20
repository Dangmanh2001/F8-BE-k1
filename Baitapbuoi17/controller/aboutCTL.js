const about = require("../model/aboutM")
module.exports = {
    about : (req,res)=>{
        const abouts = about.getList()
        res.render("about.ejs",{abouts})
    }
}