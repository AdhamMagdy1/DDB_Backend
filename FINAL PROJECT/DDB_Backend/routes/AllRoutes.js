const express = require('express');
const {
  supplierController,
  customerController,
  locationController,
  provideController,
  orderingController,
  inventoryController,
  storeController,
  productController,
} = require('../controllers/AllControllers');

const router = express.Router();

// Supplier Routes
router.post('/suppliers/create', supplierController.createSupplier);
router.get('/suppliers/all', supplierController.getAllSuppliers);
router.delete('/suppliers/delete/:id', supplierController.deleteSupplierById);
router.put('/suppliers/update/:id', supplierController.updateSupplierById);

// Customer Routes
router.post('/customers/create', customerController.createCustomer);
router.get('/customers/all', customerController.getAllCustomers);
router.delete('/customers/delete/:id', customerController.deleteCustomerById);
router.put('/customers/update/:id', customerController.updateCustomerById);

// Location Routes
router.post('/locations/create', locationController.createLocation);
router.get('/locations/all', locationController.getAllLocations);
router.delete('/locations/delete/:id', locationController.deleteLocationById);
router.put('/locations/update/:id', locationController.updateLocationById);

// Provide Routes
router.post('/provides/create', provideController.createProvide);
router.get('/provides/all', provideController.getAllProvides);
router.delete('/provides/delete/:id', provideController.deleteProvideById);
router.put('/provides/update/:id', provideController.updateProvideById);

// Ordering Routes
router.post('/orderings/create', orderingController.createOrdering);
router.get('/orderings/all', orderingController.getAllOrderings);
router.delete('/orderings/delete/:id', orderingController.deleteOrderingById);
router.put('/orderings/update/:id', orderingController.updateOrderingById);

// Inventory Routes
router.post('/inventories/create', inventoryController.createInventory);
router.get('/inventories/all', inventoryController.getAllInventories);
router.delete('/inventories/delete/:id', inventoryController.deleteInventoryById);
router.put('/inventories/update/:id', inventoryController.updateInventoryById);

// Store Routes
router.post('/stores/create', storeController.createStore);
router.get('/stores/all', storeController.getAllStores);
router.delete('/stores/delete/:id', storeController.deleteStoreById);
router.put('/stores/update/:id', storeController.updateStoreById);

// Product Routes
router.post('/products/create', productController.createProduct);
router.get('/products/all', productController.getAllProducts);
router.delete('/products/delete/:id', productController.deleteProductById);
router.put('/products/update/:id', productController.updateProductByById);

module.exports = router;