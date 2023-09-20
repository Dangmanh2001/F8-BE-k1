const Customer = require("../models/Customer");
const moment = require("moment");
const { Op } = require("sequelize");
const { PER_PAGE } = process.env;
const { getPaginateUrl } = require("../utils/helper");
const Province = require("../models/Province");
const { validationResult } = require("express-validator");
const validate = require("../utils/validate");
const md5 = require("md5");

module.exports = {
  index: async (req, res) => {
    const { keyword, status } = req.query;
    const customer = await Customer;

    const filters = {};
    if (status === "active" || status === "inactive") {
      filters.status = status === "active" ? 1 : 0;
    }

    if (keyword) {
      filters[Op.or] = [
        {
          name: {
            [Op.like]: `%${keyword}%`,
          },
        },
        {
          email: {
            [Op.like]: `%${keyword}%`,
          },
        },
      ];
    }

    //Lấy tổng số bản ghi
    const totalCountObj = await customer.findAndCountAll({
      where: filters,
    });

    const totalCount = totalCountObj.count;

    //Tính tổng số trang
    const totalPage = Math.ceil(totalCount / PER_PAGE);

    //Lấy trang hiện tại
    let { page } = req.query;
    if (!page || page < 1 || page > totalPage) {
      page = 1;
    }
    const msg = req.flash("msg");
    //Tính offset
    const offset = (page - 1) * PER_PAGE;
    const msgD = req.flash("msgD");
    const customerList = await customer.findAll({
      // attributes: ["id", "name", "email", "status"],
      order: [
        ["created_at", "DESC"],
        ["name", "ASC"],
      ],
      where: filters,
      limit: +PER_PAGE,
      offset: offset,
    });
    res.render("customers/index", {
      customerList,
      moment,
      req,
      totalPage,
      page,
      getPaginateUrl,
      msg,
      msgD,
    });
  },
  create: async (req, res) => {
    const province = await Province;
    const provinceList = await province.findAll();
    const msg = req.flash("msg");
    const errors = req.flash("errors");
    // console.log(validate.getError(errors, "name"));
    res.render("customers/create", { provinceList, msg, errors, validate });
  },
  store: async (req, res) => {
    const errors = validationResult(req);
    if (errors.isEmpty()) {
      req.flash("msg", "Thêm thành công");
      const customer = await Customer;
      req.body.password = md5(req.body.password);
      customer.create(req.body);
      res.redirect("/customers");
    } else {
      req.flash("errors", errors.array());
      req.flash("msg", "Vui lòng nhập đầy đủ thông tin");
      res.redirect("/customers/create");
    }
  },
  repair: (req, res) => {
    const msg = req.flash("msg");
    const errors = req.flash("errors");

    // console.log(validate.getError(errors, "name"));
    res.render("customers/repair", { msg, errors, validate });
  },
  handleRepair: async (req, res) => {
    const errors = validationResult(req);
    const idCustomer = req.params.id.slice(1);
    const customer = await Customer;

    if (errors.isEmpty()) {
      req.flash("msg", "Sửa thành công");

      customer.update(
        {
          name: req.body.name,
          email: req.body.email,
          status: req.body.status,
        },
        { where: { id: idCustomer } }
      );
      res.redirect(`/customers/repair:${idCustomer}`);
    } else if (req.body.name || req.body.email) {
      req.flash("errors", errors.array());

      res.redirect(`/customers/repair:${idCustomer}`);
    } else {
      req.flash("msg", "Vui lòng nhập đầy đủ thông tin");
      res.redirect(`/customers/repair:${idCustomer}`);
    }
  },
  delete: async (req, res) => {
    const customer = await Customer;
    const idCustomer = req.params.id.slice(1);
    const customerDelete = await customer.destroy({
      where: {
        id: idCustomer,
      },
    });
    req.flash("msgD", "Xóa thành công");
    res.redirect("/customers");
  },
};
