"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    await queryInterface.bulkInsert("users", [
      {
        username: "Audra Gemink",
        email: "audra@gmail.com",
        phone: "0712345678",
        password: "audra123",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        username: "Septi Penyanyi",
        email: "septinyanyi@gmail.com",
        phone: "091298735",
        password: "septiny123",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        username: "Wahyu Nack Nganjoek Jr.",
        email: "wahyu@gmail.com",
        phone: "052361721",
        password: "wahyuganteng123",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
