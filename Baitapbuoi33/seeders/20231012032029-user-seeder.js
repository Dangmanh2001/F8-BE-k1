"use strict";

const { DATE } = require("sequelize");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const data = [];
    for (let index = 0; index < 5; index++) {
      const bcrypt = require("bcrypt");
      const saltRounds = 10;
      const password = "123456";
      const passwordHash = bcrypt.hash(password, saltRounds);
      const hash = await passwordHash;
      data.push({
        name: `User ${index + 1}`,
        email: `user${index + 1}@gmail.com`,
        password: hash,

        createdAt: new Date(),
        updatedAt: new Date(),
      });
    }
    await queryInterface.bulkInsert("users", data, {});
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    return queryInterface.bulkDelete("users", null, {});
  },
};
