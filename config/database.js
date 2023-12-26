const { Sequelize } = require('sequelize');
require('dotenv').config();
const sequelize = new Sequelize(
  process.env.DATABASE_NAME,
  process.env.DATABASE_USERNAME,
  process.env.DATABASE_PASSWORD,
  {
    host: process.env.DATABASE_HOST,
    dialect: 'mssql',
  }
);

const testDbConnection = async () => {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
    sequelize
      .sync()
      .then(() => console.log('Models synced successfully!'))
      .catch((error) => console.error('Error syncing models:', error));
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
};

module.exports = { sequelize, testDbConnection };
