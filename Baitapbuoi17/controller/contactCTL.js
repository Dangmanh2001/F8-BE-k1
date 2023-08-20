const contact = require("../model/contactM")
module.exports = {
    contact : (req,res)=>{
        const contacts = contact.getList();
    console.log(contacts);
        res.render("contact.ejs",{contacts})
    }
}