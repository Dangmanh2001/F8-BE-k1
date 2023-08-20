const gallery = require("../model/galleryM")
module.exports = {
    gallery : (req,res)=>{
        const galleries = gallery.getList()
        res.render("gallery.ejs",{galleries})
    }
}