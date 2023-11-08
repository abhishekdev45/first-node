const Sequelize = require("sequelize");

const sequelize = new Sequelize("node-complete","root","@k45264*",{dialect:"mysql",host:"localhost"});

module.exports = sequelize;