# Backend Setup Guide

## Prerequisites
- [Node.js](https://nodejs.org/) installed on your machine.
- [npm](https://www.npmjs.com/) (Node Package Manager) installed.

## Installation
1. Clone the repository to your local machine:
   ```
   git clone https://github.com/AdhamMagdy1/DDB_Backend.git
   ```

1.  Change into the project directory:

    

    `cd DDB_Backend`

2.  Install dependencies:

   

    `npm install`

Database Configuration
----------------------

1.  Open the `.env` file in the root directory of the project.

2.  Update the following variables with your database credentials:

   

    `DATABASE_HOST 
DATABASE_USERNAME 
DATABASE_NAME 
DATABASE_PASSWORD `

Running the Server
------------------

-   To start the server in development mode, run:

  

    `npm run dev`

    The server will be running on `http://localhost:5000`.

Routes
------

The following routes are available:

### Suppliers

-   Create Supplier:

    -   Endpoint: `POST /suppliers/create`
    -   Body: JSON payload with supplier details.
-   Get All Suppliers:

    -   Endpoint: `GET /suppliers/all`
-   Delete Supplier by ID:

    -   Endpoint: `DELETE /suppliers/delete/:id`
    -   Replace `:id` with the actual supplier ID.
-   Update Supplier by ID:

    -   Endpoint: `PUT /suppliers/update/:id`
    -   Replace `:id` with the actual supplier ID.
    -   Body: JSON payload with updated supplier details.

### Customers

(Repeat the same format for other routes - Locations, Provides, Orderings, Inventories, Stores, Products)

Testing Routes
--------------

You can use a tool like [Postman](https://www.postman.com/) to test the routes. Import the provided JSON bodies for creating records.

-   Use the appropriate HTTP methods for each route (POST, GET, DELETE, PUT).
-   Make requests to the specified endpoints with the provided JSON bodies.

Additional Information
----------------------

-   Ensure your database server is running before starting the backend server.
-   Check the console for any error messages or logs while the server is running.


Feel free to reach out for any assistance or clarification.
`
