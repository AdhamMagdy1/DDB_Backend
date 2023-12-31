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
    // add to the sync() {force : true} if you have pre data in you database. Note: this will delete all you data!! but it also will allwo sequlize to work properly.
    sequelize
      .sync()
      .then(() => console.log('Models synced successfully!'))
      .catch((error) => console.error('Error syncing models:', error));
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
};

// const sequelize1 = new Sequelize(
//   process.env.DATABASE_NAME1,
//   process.env.DATABASE_USERNAME1,
//   process.env.DATABASE_PASSWORD1,
//   {
//     host: process.env.DATABASE_HOST1,
//     dialect: 'mssql',
//   }
// );

// const testDbConnection1 = async () => {
//   try {
//     await sequelize.authenticate();
//     console.log('Connection has been established successfully.');
//     // add to the sync() {force : true} if you have pre data in you database. Note: this will delete all you data!! but it also will allwo sequlize to work properly.
//     sequelize
//       .sync()
//       .then(() => console.log('Models synced successfully!'))
//       .catch((error) => console.error('Error syncing models:', error));
//   } catch (error) {
//     console.error('Unable to connect to the database:', error);
//   }
// };

module.exports = { sequelize, testDbConnection, };
