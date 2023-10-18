module.exports = {
  login: async (req, res) => {
    const msg = req.flash("error");
    const msgType = msg ? "danger" : "success";
    res.render("login/login", { pageTitle: "Đăng nhập", msg, msgType });
  },
};
