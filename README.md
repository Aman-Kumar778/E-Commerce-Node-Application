# 🛍️ E-Commerce Node.js Application

This is a full-stack E-Commerce web application featuring an Admin Dashboard, Frontend for users, and a Node.js Backend API.
 
  - Aman Kumar (22BCS15813)
  -  Naman Aryan (22BCS16363)

---

## 📁 Project Structure
```
🖌️ Admin/       # Admin Panel (React-based)
🖌️ Backend/     # Backend Server (Node.js, Express, MongoDB)
🖌️ frontend/    # User Frontend (React-based)
🖌️ README.md
```

---

# 🚀 How to Run the Project

## 1. Clone the repository
```bash
git clone https://github.com/Aman-Kumar778/E-Commerce-Node-Application.git
cd E-Commerce-Node-Application
```

---

## 2. Backend Setup (Node.js API)

### Navigate to the backend
```bash
cd Backend
```

### Install dependencies
```bash
npm install
```

### Create a `.env` file
Create a `.env` file in the `Backend/` directory with the following:
```env
PORT=5000
MONGO_URL=your_mongo_connection_string
JWT_SECRET=your_secret_key
```

> Replace `your_mongo_connection_string` and `your_secret_key` with your MongoDB credentials and any secret key for JWT.

### Start the server
```bash
npm run dev
```
- Backend runs at `http://localhost:5000`

---

## 3. Admin Panel Setup

### Navigate to the Admin panel
```bash
cd ../Admin
```

### Install dependencies
```bash
npm install
```

### Configure `.env`
Create a `.env` file inside `Admin/`:
```env
REACT_APP_API_URL=http://localhost:5000/api
```

### Start the Admin server
```bash
npm start
```
- Admin panel will be live at `http://localhost:3001` or similar.

---

## 4. Frontend Setup (User Interface)

### Navigate to the frontend
```bash
cd ../frontend
```

### Install dependencies
```bash
npm install
```

### Configure `.env`
Create a `.env` file inside `frontend/`:
```env
REACT_APP_API_URL=http://localhost:5000/api
```

### Start the frontend server
```bash
npm start
```
- Frontend (User side) will be live at `http://localhost:3000`.

---

# 📚 Detailed Project Overview

---

## 🛠 Backend (Node.js, Express, MongoDB)

- **Authentication & Authorization**: User login, register, JWT-based session handling.
- **Products API**: Create, update, delete, and fetch products.
- **Orders API**: Users can place orders, view order history.
- **User API**: User registration, profile update, and user management for admin.
- **Admin Features**:
  - Manage all users.
  - Manage all products.
  - Manage orders.
- **Middlewares**:
  - Error Handling
  - Authentication (JWT Protected Routes)
- **File Uploads**:
  - Product images upload feature

> Located inside the `Backend/` directory with a structured MVC (Model-View-Controller) pattern.

---

## 🔠 Frontend (React)

- **User Features**:
  - Home Page: Browse products
  - Product Details: View product information.
  - Cart Page: Add to cart, update quantity, remove items.
  - Checkout: Proceed to checkout and place orders.
  - Login/Register: User authentication.
  - Profile Page: View and edit user profile, view order history.

- **React Hooks**:
  - `useState`, `useEffect` for managing component states.
- **Routing**:
  - `react-router-dom` for page navigation.

- **State Management**:
  - Context API / Redux (based on implementation) for managing user sessions and cart globally.

---

## 📊 Admin Panel (React)

- **Admin Authentication**: Secure login for admins.
- **Dashboard**:
  - Total Products
  - Total Users
  - Total Orders
- **Product Management**:
  - Add new products
  - Edit or delete existing products
- **User Management**:
  - View all users
  - Delete/Manage users
- **Order Management**:
  - View all orders
  - Update order status (pending, shipped, delivered)

- **Libraries Used**:
  - `react-router-dom`
  - `axios` for API communication

---

# ⚙️ Technologies Used

| Technology | Description |
|------------|-------------|
| Node.js    | Backend runtime |
| Express.js | Web framework for Node.js |
| MongoDB    | NoSQL database |
| Mongoose   | MongoDB ODM |
| React.js   | Frontend library |
| Redux/Context API | State management |
| JWT        | Authentication |
| Multer     | File uploads |
| dotenv     | Environment variable management |
| bcryptjs   | Password hashing |
| axios      | HTTP requests |

---

# 🧹 Future Improvements

- Payment Integration (Stripe/PayPal)
- Product Reviews and Ratings
- Email Notifications (for orders)
- Multi-role Access Control (Super Admins, Moderators, etc.)
- Search, Filter, and Pagination for products

---

# 📸 Screenshots

*(Add screenshots of your project for frontend, admin dashboard, and API responses here)*

---

# 🧑‍💻 Developer

**Naman Aryan**
**Aman Kumar**  

[GitHub Profile](https://github.com/Aman-Kumar778)

---

# 📝 License

This project is open-source and available under the [MIT License](LICENSE) (optional).

---

