const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/database');
const Supplier = sequelize.define(
  'Supplier',
  {
    Supplier_ID: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    Supplier_Name: {
      type: DataTypes.STRING(40),
      allowNull: false,
    },
    Phone: {
      type: DataTypes.STRING(40),
      allowNull: false,
    },
    Email: {
      type: DataTypes.STRING(40),
      allowNull: false,
    },
  },
  { timestamps: false, freezeTableName: true }
);
const Product = sequelize.define(
  'Product',
  {
    Product_ID: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    Product_Name: {
      type: DataTypes.STRING(40),
      allowNull: false,
    },
    Description: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    Unit_Price: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    Manufacturer: {
      type: DataTypes.STRING(40),
      allowNull: false,
    },
  },
  { timestamps: false, freezeTableName: true }
);

const Customer = sequelize.define(
  'Customer',
  {
    Customer_ID: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    Customer_Name: {
      type: DataTypes.STRING(40),
      allowNull: false,
    },
    Phone: {
      type: DataTypes.STRING(40),
      allowNull: false,
    },
    Email: {
      type: DataTypes.STRING(40),
      allowNull: false,
    },
    City: {
      type: DataTypes.STRING(40),
      allowNull: false,
    },
  },
  { timestamps: false, freezeTableName: true }
);

const Location = sequelize.define(
  'Location',
  {
    Location_ID: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    Location_Name: {
      type: DataTypes.STRING(40),
      allowNull: false,
    },
    Address: {
      type: DataTypes.STRING(40),
      allowNull: false,
    },
    Manager: {
      type: DataTypes.STRING(40),
      allowNull: false,
    },
    Storage_Capacity: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  { timestamps: false, freezeTableName: true }
);
const Provide = sequelize.define(
  'Provide',
  {
    Supplier_ID: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    Product_ID: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    date_time: {
      type: DataTypes.DATE,
      primaryKey: true,
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  { timestamps: false, freezeTableName: true }
);
const Ordering = sequelize.define(
  'Ordering',
  {
    date_time: {
      type: DataTypes.DATE,
      primaryKey: true,
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    deliver_status: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    Customer_ID: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    Product_ID: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
  },
  { timestamps: false, freezeTableName: true }
);
const Inventory = sequelize.define(
  'Inventory',
  {
    Inventory_ID: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    Capacity: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  { timestamps: false, freezeTableName: true }
);
const Store = sequelize.define(
  'Store',
  {
    date_time: {
      type: DataTypes.DATE,
      primaryKey: true,
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    Inventory_ID: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    Product_ID: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
  },
  { timestamps: false, freezeTableName: true }
);

Customer.hasMany(Ordering, { foreignKey: 'Customer_ID' });
Ordering.belongsTo(Customer, { foreignKey: 'Customer_ID' });
Supplier.hasMany(Provide, { foreignKey: 'Supplier_ID' });
Provide.belongsTo(Supplier, { foreignKey: 'Supplier_ID' });
Product.hasMany(Provide, { foreignKey: 'Product_ID' });
Provide.belongsTo(Product, { foreignKey: 'Product_ID' });
Product.hasMany(Ordering, { foreignKey: 'Product_ID' });
Ordering.belongsTo(Product, { foreignKey: 'Product_ID' });
Product.hasMany(Store, { foreignKey: 'Product_ID' });
Store.belongsTo(Product, { foreignKey: 'Product_ID' });
Inventory.hasMany(Store, { foreignKey: 'Inventory_ID' });
Store.belongsTo(Inventory, { foreignKey: 'Inventory_ID' });
Location.hasMany(Inventory, { foreignKey: 'Location_ID' });
Inventory.belongsTo(Location, { foreignKey: 'Location_ID' });

module.exports = {
  Product,
  Supplier,
  Customer,
  Location,
  Provide,
  Ordering,
  Inventory,
  Store,
};
