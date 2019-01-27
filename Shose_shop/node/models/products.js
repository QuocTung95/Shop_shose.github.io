'use strict';
module.exports =   (sequelize, DataTypes) => {
  const products = sequelize.define('products', {
    name: { type: DataTypes.STRING, field: 'name' },
    type_id: { type: DataTypes.INTEGER, field: 'type_id' },
    price: { type: DataTypes.INTEGER, field: 'price' },
    description: { type: DataTypes.INTEGER, field: 'description' },
    gender: { type: DataTypes.INTEGER, field: 'gender' },
    image: { type: DataTypes.INTEGER, field: 'image' },
  }, {timestamps: false});
  products.associate = function(models) {
    // associations can be defined here
    products.belongsTo(models.typeProducts, {
      foreignKey: 'type_id',
      sourceKey: 'id'
    });
  };
  return products;
}