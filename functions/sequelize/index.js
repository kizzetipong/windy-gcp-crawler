const { Sequelize } = require('sequelize');
const forecastDef = require('./definitions/forecast');

// TODO: make postgres's uri connection string configurable
const uri = 'postgres://postgres:password0@34.87.30.45:5432/postgres';
const options =
  {
    pool: {
      max: 5,
      idle: 30000,
      acquire: 60000,
    },
    logging: false,
  };

const sqInstance = new Sequelize(uri, options);
sqInstance.define('forecast', forecastDef);

module.exports = sqInstance;
