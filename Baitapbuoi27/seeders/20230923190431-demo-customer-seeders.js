"use strict";

const md5 = require("md5");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("Customers", [
      {
        name: "Doe",
        email: "example@example.com",
        password: md5("123@Aab"),
        status: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "John",
        email: "example123@example.com",
        password: md5("123@Aab"),
        status: 1,

        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("Customers", null, {});
  },
};
