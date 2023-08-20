const service=require("../model/servicesM")
module.exports = {
    service : (req,res)=>{
        const services=service.getList()
        res.render("services.ejs",{services})
    }
}