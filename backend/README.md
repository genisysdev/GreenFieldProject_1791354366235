# E-Commerce Backend

This is the backend for the E-Commerce Shopping Application, built with Node.js, Express.js, and MongoDB.

## Technologies Used

-   Node.js
-   Express.js
-   MongoDB (via Mongoose ODM)
-   bcryptjs for password hashing
-   jsonwebtoken for authentication
-   dotenv for environment variables

## Getting Started

Follow these steps to set up and run the backend locally.

### Prerequisites

-   Node.js (LTS version recommended)
-   MongoDB installed and running (or a MongoDB Atlas account)

### Installation

1.  **Navigate into the backend directory:**
    ```bash
    cd backend
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

### Configuration

1.  **Create a `.env` file:**
    Copy the contents of `.env.example` into a new file named `.env` in the `backend/` directory.

    ```bash
    cp .env.example .env
    ```

2.  **Update environment variables in `.env`:**
    -   `PORT`: The port your server will run on (default: 5000).
    -   `MONGO_URI`: Your MongoDB connection string. If using local MongoDB, it might be `[REDACTED_DB_CONN_STRING] For MongoDB Atlas, use your connection string.
    -   `JWT_SECRET`: A strong, random string for signing JWT tokens. **CRITICAL: Change this from the example value for production.**
    -   `JWT_EXPIRE`: The expiration time for JWT tokens (e.g., `30d` for 30 days).

### Running the Application

1.  **To run in development mode (with `nodemon` for auto-reloading):**
    ```bash
    npm run dev
    ```

2.  **To run in production mode:**
    ```bash
    npm start
    ```
The server will start on `http://localhost:5000` (or your specified PORT).

## API Endpoints (Initial)

### User Authentication

-   `POST /api/users/register` - Register a new user.
-   `POST /api/users/login` - Authenticate user & get token.
-   `GET /api/users/profile` - Get user profile (Protected).

### Products

-   `GET /api/products` - Get all products.
-   `GET /api/products/:id` - Get a single product by ID.

## Project Structure

```
backend/
├── config/
│   └── db.js
├── controllers/
│   ├── userController.js
│   └── productController.js
├── middleware/
│   ├── authMiddleware.js
│   └── errorHandler.js
├── models/
│   ├── User.js
│   ├── Product.js
│   ├── Cart.js
│   ├── Wishlist.js
│   ├── Order.js
│   ├── Review.js
│   └── Category.js
├── routes/
│   ├── userRoutes.js
│   └── productRoutes.js
├── utils/
│   └── generateToken.js
├── .env.example
├── server.js
├── package.json
└── README.md
```
