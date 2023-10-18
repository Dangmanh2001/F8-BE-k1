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
        const {short_url,message} = await shorten
          
       req.flash("short_url","URL Shorten: "+short_url)

        if(message){
            req.flash("err",message)
        }else{
            await model.short_link.create({
                shorten:short_url,
                original:link,
                user_id:req.user.id
            })
        }


        
        res.redirect("/short_link")
    },
    manage:async(req,res)=>{
        const msg = req.flash("msg")
        const shortLinks = await model.short_link.findAll({include:model.User})
        
      
        res.render("short_link/manager",{msg,shortLinks,req})
    },
    edit:async(req,res)=>{
        const id = req.params.id
        const err = req.flash("err")
        const msg = req.flash("msg")
        
        const short_links = await model.short_link.findByPk(id)
        const {shorten,original}= short_links
        
        res.render("short_link/edit",{shorten,original,id,err,msg})
    },
    handleEdit:async(req,res)=>{
        const {shorten_id,original_link} = req.body
        
        const id = req.params.id
        const url = new URL(
            "https://t.ly/api/v1/link"
        );
        const short_links =await model.short_link.findByPk(id)
        
        const headers = {
            "Authorization": "Bearer dOqEdoy6W5CePDNqvp4BFT9hk1CsVPP6GAmbjenoKTxUHAfwTf18N06ROpxD",
            "Content-Type": "application/json",
            "Accept": "application/json",
        };
        
        let body = {
            "short_url": short_links.shorten,
            "long_url": original_link,
            "short_id": shorten_id,
            "expire_at_datetime": "2035-01-17 15:00:00",
            "description": "Social Media Link",
            "public_stats": true,
        };
        
        let data = fetch(url, {
            method: "PUT",
            headers,
            body: JSON.stringify(body),
        }).then(response => response.json());
        data = await data
        if(data.message){
            const err = req.flash("err",data.message)
            res.redirect("/short_link/edit/"+id)
        }else{
            await model.short_link.update({ original:data.long_url,shorten:data.short_url},{
                where:{
                    id:id
                }
            })
            const msg = req.flash("msg","Sửa thành công")
            res.redirect("/short_link/edit/"+id)
        } 
    },
    delete:async(req,res)=>{
        const id =req.params.id
        const short_links=await model.short_link.findByPk(id)
        console.log(short_links)
        const url = new URL(
            "https://t.ly/api/v1/link"
        );
        
        const headers = {
            "Authorization": "Bearer dOqEdoy6W5CePDNqvp4BFT9hk1CsVPP6GAmbjenoKTxUHAfwTf18N06ROpxD",
            "Content-Type": "application/json",
            "Accept": "application/json",
        };
        
        let body = {
            "short_url": short_links.shorten
        };
        
        fetch(url, {
            method: "DELETE",
            headers,
            body: JSON.stringify(body),
        }).then(response => response.json());

        await model.short_link.destroy({
            where:{
                id:id
            }
        })
        const msg = req.flash("msg","Xóa thành công")
        res.redirect("/short_link/manager")

    }

}