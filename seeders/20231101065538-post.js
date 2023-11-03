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
   await queryInterface.bulkInsert('posts', [{
     username: 'Ichigo',
     post: 'test',
     image: 'test',
     post_date: new Date(),
     createdAt: new Date(),
     updatedAt: new Date()
   },
   {
    username: 'John Doe',
    post: 'test',
    image: 'test',
    post_date: new Date(),
    createdAt: new Date(),
    updatedAt: new Date()
   },
   {
    username: 'John chirs',
    post: 'test',
    image: 'test',
    post_date: new Date(),
    createdAt: new Date(),
    updatedAt: new Date()
   }], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
