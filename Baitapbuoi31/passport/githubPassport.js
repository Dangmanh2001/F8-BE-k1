var GithubStrategy = require("passport-github2");
const model = require("../models/index");
const Provider = model.Provider;
const User = model.User;

module.exports = new GithubStrategy(
  {
    clientID: process.env.CLIENT_ID_GITHUB,
    clientSecret: process.env.CLIENT_SECRET_GITHUB,
    scope: ["user:email"],
    callbackURL: process.env.URL_GITHUB,
  },
  async (accessToken, refreshToken, profile, cb) => {
    console.log(profile);
    const { username, emails } = profile;
    const [{ value: email }] = emails;
    console.log(username, email);

    const provider = "github";
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

    let user = await User.findOne({
      where: {
        email,
        provider_id: providerID,
      },
    });
    if (!user) {
      user = await User.create({
        name: username,
        email,
        provider_id: providerID,
      });
    }

    return cb(null, user);
  }
);
