# E-Commerce Frontend (React)

This is the frontend for the E-Commerce Shopping Application, built with React.js.

## Technologies Used

-   React.js
-   React Router DOM
-   Axios for API requests
-   React Context API for state management

## Getting Started

Follow these steps to set up and run the frontend locally.

### Prerequisites

-   Node.js (LTS version recommended)
-   The backend server should be running (refer to `backend/README.md`).

### Installation

1.  **Navigate into the frontend directory:**
    ```bash
    cd frontend
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

### Running the Application

1.  **To start the React development server:**
    ```bash
    npm start
    ```
    The application will open in your browser at `http://localhost:3000`.

## Project Structure

```
frontend/
├── public/
│   └── index.html
├── src/
│   ├── api/
│   │   └── index.js
│   ├── components/
│   │   ├── Header.js
│   │   └── Footer.js
│   ├── contexts/
│   │   └── AuthContext.js
│   ├── screens/
│   │   ├── HomeScreen.js
│   │   ├── LoginScreen.js
│   │   └── RegisterScreen.js
│   ├── App.js
│   └── index.js
├── package.json
└── README.md
```
