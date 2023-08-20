const gallery = require("../model/galleryM")
const service=require("../model/servicesM")
const contact = require("../model/contactM")
const about = require("../model/aboutM")

module.exports = {
    index: (req, res) => {
        const services=service.getList()
        const galleries=service.getList()
        const contacts=service.getList()
        const abouts=service.getList()

      res.render("index", {services, galleries, contacts, abouts});
    },
  }