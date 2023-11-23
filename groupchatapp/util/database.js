const Sequelize = require('sequelize');

const sequelize = new Sequelize(
      'group-chat',
      'root',
      '@k45264*',
      {
            dialect:"mysql",
            host:"localhost",
            logging: false
      }
);

module.exports = sequelize;
