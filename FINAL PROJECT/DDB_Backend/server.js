const express = require('express');
const bodyParser = require('body-parser');
const { errorHandler } = require('./utils/error');
const { testDbConnection } = require('./config/database');
// const { testDbConnection1 } = require('./config/database');
const AllRoutes = require('./routes/AllRoutes');

const app = express();

app.use(bodyParser.json());

// Middleware for Cross-Origin Resource Sharing (CORS)
const cors = require('cors');
app.use(cors());
// Logging Middleware (optional)
const morgan = require('morgan');
app.use(morgan('dev'));
// Load environment variables
require('dotenv').config();

// Connect to the database
testDbConnection();
// testDbConnection1();

// Routs
app.use('/', AllRoutes);

// Applying the errorHandler middleware
app.use(errorHandler);

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
