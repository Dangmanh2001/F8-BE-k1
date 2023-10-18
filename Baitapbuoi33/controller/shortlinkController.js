const axios = require('axios');
const model = require("../models/index")

module.exports = {
    index:(req,res)=>{
        const short_url = req.flash("short_url")
        const err = req.flash("err")
        res.render("short_link/index",{short_url,err})
    },
    shorten:async(req,res)=>{
        const link = req.body.original_link
     
        
        const url = new URL(
            "https://t.ly/api/v1/link/shorten"
        );
        
        const headers = {
            "Authorization": "Bearer dOqEdoy6W5CePDNqvp4BFT9hk1CsVPP6GAmbjenoKTxUHAfwTf18N06ROpxD",
            "Content-Type": "application/json",
            "Accept": "application/json",
        };
        
        let body = {
            "long_url": link,
            "domain": "https:\/\/t.ly\/",
            "expire_at_datetime": "2035-01-17 15:00:00",
            "description": "Social Media Link",
            "public_stats": true,
        };
        
        const shorten = fetch(url, {
            method: "POST",
            headers,
            body: JSON.stringify(body),
        }).then(response => response.json());
        const {short_url} = await shorten
          
       req.flash("short_url","URL Shorten: "+short_url)

       console.log(await shorten)



        
        res.redirect("/short_link")
    },
    manage:async(req,res)=>{
        const msg = req.flash("msg")
        const shortLinks = await model.short_link.findAll()
        console.log(shortLinks)
        res.render("short_link/manager",{msg,shortLinks})
    }
}