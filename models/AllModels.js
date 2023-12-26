// const { sequelize } = require('../config/database');
// const { DataTypes } = require('sequelize');

// const Product = sequelize.define(
//   'Product',
//   {
//     Product_ID: {
//       type: DataTypes.INTEGER,
//       primaryKey: true,
//       autoIncrement: true,
//     },
//     Product_Name: DataTypes.STRING,
//     Description: DataTypes.STRING,
//     Unit_Price: DataTypes.INTEGER,
//     Manufacturer: DataTypes.STRING,
//   },
//   { timestamps: false, freezeTableName: true }
// );

// const Supplier = sequelize.define(
//   'Supplier',
//   {
//     Supplier_ID: {
//       type: DataTypes.INTEGER,
//       primaryKey: true,
//       autoIncrement: true,
//     },
//     Supplier_Name: DataTypes.STRING,
//     Phone: DataTypes.STRING,
//     Email: DataTypes.STRING,
//   },
//   { timestamps: false, freezeTableName: true }
// );

// const Customer = sequelize.define(
//   'Customer',
//   {
//     Customer_ID: {
//       type: DataTypes.INTEGER,
//       primaryKey: true,
//     },
//     Customer_Name: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     },
//     Phone: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     },
//     Email: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     },
//     City: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     },
//   },
//   { timestamps: false, freezeTableName: true }
// );

// const Location = sequelize.define(
//   'Location',
//   {
//     Location_ID: {
//       type: DataTypes.INTEGER,
//       primaryKey: true,
//     },
//     Location_Name: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     },
//     Address: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     },
//     Manager: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     },
//     Storage_Capacity: {
//       type: DataTypes.INTEGER,
//       allowNull: false,
//     },
//   },
//   { timestamps: false, freezeTableName: true }
// );

// const Inventory = sequelize.define(
//   'Inventory',
//   {
//     Inventory_ID: {
//       type: DataTypes.INTEGER,
//       primaryKey: true,
//     },
//     Capacity: {
//       type: DataTypes.INTEGER,
//       allowNull: false,
//     },
//     Location_ID: {
//       type: DataTypes.INTEGER,
//       allowNull: false,
//     },
//   },
//   { timestamps: false, freezeTableName: true }
// );

// const Ordering = sequelize.define(
//   'Ordering',
//   {
//     Customer_ID: {
//       type: DataTypes.INTEGER,
//       primaryKey: true,
//     },
//     Product_ID: {
//       type: DataTypes.INTEGER,
//       primaryKey: true,
//     },
//     date_time: {
//       type: DataTypes.DATE,
//       primaryKey: true,
//     },
//     quantity: {
//       type: DataTypes.INTEGER,
//       allowNull: false,
//     },
//     deliver_status: {
//       type: DataTypes.BOOLEAN,
//       allowNull: false,
//     },
//   },
//   { timestamps: false, freezeTableName: true }
// );

// const Provide = sequelize.define(
//   'Provide',
//   {
//     Supplier_ID: {
//       type: DataTypes.INTEGER,
//       primaryKey: true,
//     },
//     Product_ID: {
//       type: DataTypes.INTEGER,
//       primaryKey: true,
//     },
//     date_time: {
//       type: DataTypes.DATE,
//       primaryKey: true,
//     },
//     quantity: {
//       type: DataTypes.INTEGER,
//       allowNull: false,
//     },
//   },
//   { timestamps: false, freezeTableName: true }
// );

// const Store = sequelize.define(
//   'Store',
//   {
//     Inventory_ID: {
//       type: DataTypes.INTEGER,
//       primaryKey: true,
//     },
//     Product_ID: {
//       type: DataTypes.INTEGER,
//       primaryKey: true,
//     },
//     date_time: {
//       type: DataTypes.DATE,
//       primaryKey: true,
//     },
//     quantity: {
//       type: DataTypes.INTEGER,
//       allowNull: false,
//     },
//   },
//   { timestamps: false, freezeTableName: true }
// );

// module.exports = {
//   Product,
//   Supplier,
//   Customer,
//   Location,
//   Provide,
//   Ordering,
//   Inventory,
//   Store,
// };

const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/database');

const Product = sequelize.define(
  'Product',
  {
    Product_ID: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    Product_Name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Unit_Price: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    Manufacturer: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  { timestamps: false, freezeTableName: true }
);

const Supplier = sequelize.define(
  'Supplier',
  {
    Supplier_ID: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    Supplier_Name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Phone: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Email: {
      type: DataTypes.STRING,
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
      type: DataTypes.STRING,
      allowNull: false,
    },
    Phone: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    City: {
      type: DataTypes.STRING,
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
      type: DataTypes.STRING,
      allowNull: false,
    },
    Address: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Manager: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Storage_Capacity: {
      type: DataTypes.INTEGER,
      allowNull: false,
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
    Location_ID: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  { timestamps: false, freezeTableName: true }
);

const Ordering = sequelize.define(
  'Ordering',
  {
    // Explicit primary key with auto-increment
    OrderID: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    Customer_ID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: Customer,
        key: 'Customer_ID',
      },
    },
    Product_ID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: Product,
        key: 'Product_ID',
      },
    },
    date_time: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    deliver_status: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false, // Indicates order not yet delivered
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
      references: {
        model: Supplier,
        key: 'Supplier_ID',
      },
    },
    Product_ID: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      references: {
        model: Product,
        key: 'Product_ID',
      },
    },
    date_time: {
      type: DataTypes.DATE,
      primaryKey: true,
    },
    quantity: DataTypes.INTEGER,
  },
  { timestamps: false, freezeTableName: true }
);

const Store = sequelize.define(
  'Store',
  {
    Inventory_ID: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      references: {
        model: Inventory,
        key: 'Inventory_ID',
      },
    },
    Product_ID: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      references: {
        model: Product,
        key: 'Product_ID',
      },
    },
    date_time: {
      type: DataTypes.DATE,
      primaryKey: true,
    },
    quantity: DataTypes.INTEGER,
  },
  { timestamps: false, freezeTableName: true }
);

// Associations
Product.belongsTo(Supplier);
Product.belongsToMany(Ordering, { through: 'Provide' });
Product.belongsToMany(Inventory, { through: 'Store' });

Supplier.hasMany(Product);
Supplier.hasMany(Provide);

Customer.hasMany(Ordering);

Location.hasMany(Inventory);

Inventory.belongsTo(Location);
Inventory.belongsToMany(Product, { through: 'Store' });

Ordering.belongsTo(Customer);
Ordering.belongsTo(Product);

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
