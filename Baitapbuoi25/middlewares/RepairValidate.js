const { check } = require("express-validator");
const Customer = require("../models/Customer");
const { EagerLoadingError } = require("sequelize");

module.exports = () => {
  return [
    check("name", "Tên bắt buộc phải nhập").notEmpty(),
    check("name", "Tên phải từ 5 ký tự").isLength({ min: 5 }),
    check("email", "Email bắt buộc phải nhập").notEmpty(),
    check("email", "Email không đúng định dạng").isEmail(),
    check("email").custom(async (email) => {
      const customer = await Customer;
      const customerData = await customer.findOne({ where: { email: email } });
      if (customerData) {
        throw new Error("Email đã tồn tại");
      }
    }),
  ];
};
