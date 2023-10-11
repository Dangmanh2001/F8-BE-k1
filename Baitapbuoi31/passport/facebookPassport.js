var express = require("express");
var passport = require("passport");

var FacebookStrategy = require("passport-facebook");
const model = require("../models/index");
const Provider = model.Provider;
const User = model.User;

module.exports = new FacebookStrategy(
  {
    clientID: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
    callbackURL: process.env.URL,
    state: true,
    profileFields: ["id", "emails", "name"],
  },
  async (accessToken, refreshToken, profile, cb) => {
    const { _json } = profile;
    console.log(_json);
    const provider = "facebook";
    const { email, last_name, first_name } = _json;
    let providerDetail = await Provider.findOne({
      where: {
        name: provider,
      },
    });
    let providerID;
    if (!providerDetail) {
      providerDetail = await Provider.create({
        name: provider,
      });
    }
    providerID = providerDetail.dataValues.id;
    console.log(providerDetail);
    let user = await User.findOne({
      where: {
        email,
        provider_id: providerID,
      },
    });
    if (!user) {
      user = await User.create({
        name: last_name + " " + first_name,
        email,
        provider_id: providerID,
      });
    }

    return cb(null, user);
  }
);
