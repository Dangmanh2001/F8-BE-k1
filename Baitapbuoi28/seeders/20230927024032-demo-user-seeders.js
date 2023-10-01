"use strict";
const md5 = require("../utils/md5");
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("Users", [
      {
        name: "mạnh",
        email: "example@example.com",
        password: md5("123@Aab"),
        role: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "manh2",
        email: "example123@example.com",
        password: md5("123@Aab"),
        role: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("Users", null, {});
  },
};
