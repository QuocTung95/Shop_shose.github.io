'use strict';
module.exports =   (sequelize, DataTypes) => {
  const users = sequelize.define('users', {
    name: { type: DataTypes.STRING, field: 'name' },
    age: { type: DataTypes.STRING, field: 'age' },
    email: { type: DataTypes.STRING, field: 'email' },
    phone: { type: DataTypes.STRING, field: 'phone' },
    password: { type: DataTypes.STRING, field: 'password' },
    active: { type: DataTypes.BOOLEAN, field: 'active' },
  }, {timestamps: false,
  //   instanceMethods: {
  //     generateHash(password) {
  //         return bcrypt.hash(password, bcrypt.genSaltSync(8));
  //     },
  //     validPassword(password) {
  //         return bcrypt.compare(password, this.password);
  //     }
  // }
  }
  
  );
  users.associate = function(models) {
    // associations can be defined here
    // users.hasOne(models.cards, {
    //   foreignKey: 'card_id',
    //   sourceKey: 'id'
    // });
  };
  return users;
}