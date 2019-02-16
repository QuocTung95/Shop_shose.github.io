'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('products', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      type_id : {
        type: Sequelize.INTEGER
      },
      price : {
        type: Sequelize.STRING
      },
      description : {
        type: Sequelize.STRING
      },
      gender : {
        type: Sequelize.BOOLEAN
      },
      image : {
        type: Sequelize.STRING
      },
      sub_image : {
        type: Sequelize.STRING
      },
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('products');
  }
};