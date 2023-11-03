'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
   await queryInterface.bulkInsert('accounts', [{
    username: 'admin',
    email: 'admin@example.com',
    password: '122345678',
    role: 'admin',
    createdAt: new Date(),
    updatedAt: new Date()
   },{
    username: 'user',
    email: 'user@example.com',
    password: '122345678',
    role: 'user',
    createdAt: new Date(),
    updatedAt: new Date()
   },
   {
    username: 'user1',
    email: 'user1@example.com',
    password: '122345678',
    role: 'user',
    createdAt: new Date(),
    updatedAt: new Date()
   }
  ], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    // await queryInterface.bulkDelete('accounts', null, {});
  }
};
