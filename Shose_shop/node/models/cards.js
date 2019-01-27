'use strict';
module.exports =   (sequelize, DataTypes) => {
  const cards = sequelize.define('cards', {
    product_id: { type: DataTypes.INTEGER, field: 'product_id' },
    user_id: { type: DataTypes.INTEGER, field: 'user_id' },
  }, {timestamps: false});
  cards.associate = function(models) {
    // associations can be defined here
    cards.belongsTo(models.users, {
      foreignKey: 'user_id',
      sourceKey: 'id'
    });
  };
  return cards;
}