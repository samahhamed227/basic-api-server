'use strict';

const Clothes = (sequelize, DataTypes) => sequelize.define('Clothes', {
    clothesName: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    clothesBrand: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
});

module.exports = Clothes;