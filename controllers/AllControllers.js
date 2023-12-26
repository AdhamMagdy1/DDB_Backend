// Import necessary models and modules
const {
  Product,
  Supplier,
  Customer,
  Location,
  Provide,
  Ordering,
  Inventory,
  Store,
} = require('../models//AllModels');
const { AppError } = require('../utils/error');

//Product Controller
const productController = {
  createProduct: async (req, res, next) => {
    try {
      const product = Product.create(req.body);
      res.status(201).json({
        product: product,
        message: 'product created successfully',
      });
    } catch (error) {
      console.error('Error creating product:', error);
      next(new AppError('Internal Server Error', 500));
    }
  },

  getAllProducts: async (req, res, next) => {
    try {
      const products = await Product.findAll();
      res.json({ products: products });
    } catch (error) {
      console.error('Error fetching products:', error);
      next(new AppError('Internal Server Error', 500));
    }
  },

  deleteProductById: async (req, res, next) => {
    try {
      const product = await Product.findByPk(req.params.id);
      if (!product) {
        return next(new AppError('product not found', 404));
      }
      await product.destroy();
      res.json({ message: 'product deleted successfully' });
    } catch (error) {
      console.error('Error deleting product:', error);
      next(new AppError('Internal Server Error', 500));
    }
  },
  updateProductByById: async (req, res, next) => {
    try {
      const product = await Product.findByPk(req.params.id);

      if (!product) {
        return next(new AppError('Product not found', 404));
      }

      await product.update(req.body);

      res.json({ message: 'Product updated successfully', product });
    } catch (error) {
      console.error('Error updating Product:', error);
      next(new AppError('Internal Server Error', 500));
    }
  },
};

// Supplier Controller
const supplierController = {
  createSupplier: async (req, res, next) => {
    try {
      const supplier = Supplier.create(req.body);
      res.status(201).json({
        supplier: supplier,
        message: 'Supplier created successfully',
      });
    } catch (error) {
      console.error('Error creating supplier:', error);
      next(new AppError('Internal Server Error', 500));
    }
  },

  getAllSuppliers: async (req, res, next) => {
    try {
      const suppliers = await Supplier.findAll();
      res.json({ suppliers: suppliers });
    } catch (error) {
      console.error('Error fetching suppliers:', error);
      next(new AppError('Internal Server Error', 500));
    }
  },

  deleteSupplierById: async (req, res, next) => {
    try {
      const supplier = await Supplier.findByPk(req.params.id);
      if (!supplier) {
        return next(new AppError('Supplier not found', 404));
      }
      await supplier.destroy();
      res.json({ message: 'Supplier deleted successfully' });
    } catch (error) {
      console.error('Error deleting supplier:', error);
      next(new AppError('Internal Server Error', 500));
    }
  },

  updateSupplierById: async (req, res, next) => {
    try {
      const supplier = await Supplier.findByPk(req.params.id);

      if (!supplier) {
        return next(new AppError('Supplier not found', 404));
      }

      await supplier.update(req.body);

      res.json({ message: 'Supplier updated successfully', supplier });
    } catch (error) {
      console.error('Error updating supplier:', error);
      next(new AppError('Internal Server Error', 500));
    }
  },
};

// Customer Controller
const customerController = {
  createCustomer: async (req, res, next) => {
    try {
      const customer = Customer.create(req.body);
      res.status(201).json({
        customer: customer,
        message: 'Customer created successfully',
      });
    } catch (error) {
      console.error('Error creating customer:', error);
      next(new AppError('Internal Server Error', 500));
    }
  },

  getAllCustomers: async (req, res, next) => {
    try {
      const customers = await Customer.findAll();
      res.json({ customers: customers });
    } catch (error) {
      console.error('Error fetching customers:', error);
      next(new AppError('Internal Server Error', 500));
    }
  },

  deleteCustomerById: async (req, res, next) => {
    try {
      const customer = await Customer.findByPk(req.params.id);
      if (!customer) {
        return next(new AppError('Customer not found', 404));
      }
      await customer.destroy();
      res.json({ message: 'Customer deleted successfully' });
    } catch (error) {
      console.error('Error deleting customer:', error);
      next(new AppError('Internal Server Error', 500));
    }
  },

  updateCustomerById: async (req, res, next) => {
    try {
      const customer = await Customer.findByPk(req.params.id);

      if (!customer) {
        return next(new AppError('Customer not found', 404));
      }

      await customer.update(req.body);

      res.json({ message: 'Customer updated successfully', customer });
    } catch (error) {
      console.error('Error updating customer:', error);
      next(new AppError('Internal Server Error', 500));
    }
  },
};

// Location Controller
const locationController = {
  createLocation: async (req, res, next) => {
    try {
      const location = Location.create(req.body);
      res.status(201).json({
        location: location,
        message: 'Location created successfully',
      });
    } catch (error) {
      console.error('Error creating location:', error);
      next(new AppError('Internal Server Error', 500));
    }
  },

  getAllLocations: async (req, res, next) => {
    try {
      const locations = await Location.findAll();
      res.json({ locations: locations });
    } catch (error) {
      console.error('Error fetching locations:', error);
      next(new AppError('Internal Server Error', 500));
    }
  },

  deleteLocationById: async (req, res, next) => {
    try {
      const location = await Location.findByPk(req.params.id);
      if (!location) {
        return next(new AppError('Location not found', 404));
      }
      await location.destroy();
      res.json({ message: 'Location deleted successfully' });
    } catch (error) {
      console.error('Error deleting location:', error);
      next(new AppError('Internal Server Error', 500));
    }
  },

  updateLocationById: async (req, res, next) => {
    try {
      const location = await Location.findByPk(req.params.id);

      if (!location) {
        return next(new AppError('Location not found', 404));
      }

      await location.update(req.body);

      res.json({ message: 'Location updated successfully', location });
    } catch (error) {
      console.error('Error updating location:', error);
      next(new AppError('Internal Server Error', 500));
    }
  },
};

// Provide Controller
const provideController = {
  createProvide: async (req, res, next) => {
    try {
      const provide = Provide.create(req.body);
      res.status(201).json({
        provide: provide,
        message: 'Provide created successfully',
      });
    } catch (error) {
      console.error('Error creating provide:', error);
      next(new AppError('Internal Server Error', 500));
    }
  },

  getAllProvides: async (req, res, next) => {
    try {
      const provides = await Provide.findAll();
      res.json({ provides: provides });
    } catch (error) {
      console.error('Error fetching provides:', error);
      next(new AppError('Internal Server Error', 500));
    }
  },

  deleteProvideById: async (req, res, next) => {
    try {
      const provide = await Provide.findByPk(req.params.id);
      if (!provide) {
        return next(new AppError('Provide not found', 404));
      }
      await provide.destroy();
      res.json({ message: 'Provide deleted successfully' });
    } catch (error) {
      console.error('Error deleting provide:', error);
      next(new AppError('Internal Server Error', 500));
    }
  },

  updateProvideById: async (req, res, next) => {
    try {
      const provide = await Provide.findByPk(req.params.id);

      if (!provide) {
        return next(new AppError('Provide not found', 404));
      }

      await provide.update(req.body);

      res.json({ message: 'Provide updated successfully', provide });
    } catch (error) {
      console.error('Error updating provide:', error);
      next(new AppError('Internal Server Error', 500));
    }
  },
};

// Ordering Controller
const orderingController = {
  createOrdering: async (req, res, next) => {
    try {
      const ordering = Ordering.create(req.body);
      res.status(201).json({
        ordering: ordering,
        message: 'Ordering created successfully',
      });
    } catch (error) {
      console.error('Error creating ordering:', error);
      next(new AppError('Internal Server Error', 500));
    }
  },

  getAllOrderings: async (req, res, next) => {
    try {
      const orderings = await Ordering.findAll();
      res.json({ orderings: orderings });
    } catch (error) {
      console.error('Error fetching orderings:', error);
      next(new AppError('Internal Server Error', 500));
    }
  },

  deleteOrderingById: async (req, res, next) => {
    try {
      const ordering = await Ordering.findByPk(req.params.id);
      if (!ordering) {
        return next(new AppError('Ordering not found', 404));
      }
      await ordering.destroy();
      res.json({ message: 'Ordering deleted successfully' });
    } catch (error) {
      console.error('Error deleting ordering:', error);
      next(new AppError('Internal Server Error', 500));
    }
  },

  updateOrderingById: async (req, res, next) => {
    try {
      const ordering = await Ordering.findByPk(req.params.id);

      if (!ordering) {
        return next(new AppError('Ordering not found', 404));
      }

      await ordering.update(req.body);

      res.json({ message: 'Ordering updated successfully', ordering });
    } catch (error) {
      console.error('Error updating ordering:', error);
      next(new AppError('Internal Server Error', 500));
    }
  },
};

// Inventory Controller
const inventoryController = {
  createInventory: async (req, res, next) => {
    try {
      const inventory = Inventory.create(req.body);
      res.status(201).json({
        inventory: inventory,
        message: 'Inventory created successfully',
      });
    } catch (error) {
      console.error('Error creating inventory:', error);
      next(new AppError('Internal Server Error', 500));
    }
  },

  getAllInventories: async (req, res, next) => {
    try {
      const inventories = await Inventory.findAll();
      res.json({ inventories: inventories });
    } catch (error) {
      console.error('Error fetching inventories:', error);
      next(new AppError('Internal Server Error', 500));
    }
  },

  deleteInventoryById: async (req, res, next) => {
    try {
      const inventory = await Inventory.findByPk(req.params.id);
      if (!inventory) {
        return next(new AppError('Inventory not found', 404));
      }
      await inventory.destroy();
      res.json({ message: 'Inventory deleted successfully' });
    } catch (error) {
      console.error('Error deleting inventory:', error);
      next(new AppError('Internal Server Error', 500));
    }
  },

  updateInventoryById: async (req, res, next) => {
    try {
      const inventory = await Inventory.findByPk(req.params.id);

      if (!inventory) {
        return next(new AppError('Inventory not found', 404));
      }

      await inventory.update(req.body);

      res.json({ message: 'Inventory updated successfully', inventory });
    } catch (error) {
      console.error('Error updating inventory:', error);
      next(new AppError('Internal Server Error', 500));
    }
  },
};

// Store Controller
const storeController = {
  createStore: async (req, res, next) => {
    try {
      const store = Store.create(req.body);
      res.status(201).json({
        store: store,
        message: 'Store created successfully',
      });
    } catch (error) {
      console.error('Error creating store:', error);
      next(new AppError('Internal Server Error', 500));
    }
  },

  getAllStores: async (req, res, next) => {
    try {
      const stores = await Store.findAll();
      res.json({ stores: stores });
    } catch (error) {
      console.error('Error fetching stores:', error);
      next(new AppError('Internal Server Error', 500));
    }
  },

  deleteStoreById: async (req, res, next) => {
    try {
      const store = await Store.findByPk(req.params.id);
      if (!store) {
        return next(new AppError('Store not found', 404));
      }
      await store.destroy();
      res.json({ message: 'Store deleted successfully' });
    } catch (error) {
      console.error('Error deleting store:', error);
      next(new AppError('Internal Server Error', 500));
    }
  },

  updateStoreById: async (req, res, next) => {
    try {
      const store = await Store.findByPk(req.params.id);

      if (!store) {
        return next(new AppError('Store not found', 404));
      }

      await store.update(req.body);

      res.json({ message: 'Store updated successfully', store });
    } catch (error) {
      console.error('Error updating store:', error);
      next(new AppError('Internal Server Error', 500));
    }
  },
};

module.exports = {
  productController,
  supplierController,
  customerController,
  locationController,
  provideController,
  orderingController,
  inventoryController,
  storeController,
};
