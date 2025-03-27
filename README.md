# 📚 Sellermanic - Full-Stack MERN Bookstore with Admin Dashboard

![MERN Stack](https://img.shields.io/badge/MERN-Stack-%2361DAFB?logo=react&logoColor=white)
![JWT Authentication](https://img.shields.io/badge/Auth-JWT-orange)
![Admin Dashboard](https://img.shields.io/badge/Feature-Admin_Dashboard-green)

Sellermanic is a modern bookstore web application built with the MERN stack (MongoDB, Express, React, Node.js), featuring a complete admin dashboard for content management and user administration.

## 🚀 Features

### 👤 User Features
- JWT-based user authentication (Login/Register)
- Book browsing 
- Shopping cart functionality
- Favorites system
- Order history tracking
- User profile management

### 👑 Admin Features
- **Full Book Management** (Create/Read/Update/Delete)
- Real-time order monitoring
- User administration panel
- Access to all user data and activities
- Content moderation capabilities

## 🛠 Tech Stack

**Frontend:**
- React.js + Vite
- Redux Toolkit (State management)
- React Router (Routing)
- Axios (HTTP Client)
- CSS Modules

**Backend:**
- Node.js
- Express.js
- MongoDB (Atlas/Mongoose)
- JWT (Authentication)
- Bcryptjs (Password hashing)
- CORS (Cross-Origin Resource Sharing)
- Dotenv (Environment variables)

**Dev Tools:**
- Postman /Thunder Client (API Testing)
- ESLint + Prettier (Code formatting)
- Git (Version Control)

## 🚀 Getting Started

### Prerequisites
- Node.js (v18+)
- npm (v9+)
- MongoDB Atlas account or local MongoDB instance

### 📦 Installation

1. **Clone Repository**
```bash
git clone https://github.com/bhupesh227/bhupesh227-bookstore.git
```
2. **Change Directory**
```bash
cd bhupesh227-bookstore
```
3. **Backend Setup**
```bash
cd backend
npm install
# Create .env file with:
# MONGO_URI=your_mongodb_connection_string
# JWT_SECRET=your_jwt_secret_key
# PORT=your_port
nodemon app.js
```
4. **Frontend Setup**
```bash
cd ../frontend
npm install
# Create .env file with:
# VITE_API_URL==for_local_devices_"http://localhost:3000"
npm run dev
```
## 📂 Project Structure

```bash
bhupesh227-bookstore/
    ├── .gitignore
    ├── README.md
    ├── backend/
    │   ├── app.js
    │   ├── package-lock.json
    │   ├── package.json
    │   ├── connections/
    │   │   └── connection.js
    │   ├── models/
    │   │   ├── book.js
    │   │   ├── order.js
    │   │   └── user.js
    │   └── routes/
    │       ├── book.js
    │       ├── cart.js
    │       ├── favourite.js
    │       ├── order.js
    │       ├── user.js
    │       └── userAuth.js
    └── frontend/
        ├── README.md
        ├── eslint.config.js
        ├── index.html
        ├── package-lock.json
        ├── package.json
        ├── vite.config.js
        ├── .gitignore
        ├── public/
        └── src/
            ├── App.css
            ├── App.jsx
            ├── index.css
            ├── main.jsx
            ├── assets/
            ├── components/
            │   ├── BookCard/
            │   │   └── BookCard.jsx
            │   ├── BookDetails/
            │   │   └── BookDetails.jsx
            │   ├── Footer/
            │   │   └── Footer.jsx
            │   ├── Home/
            │   │   ├── Hero.jsx
            │   │   └── RecentlyAdded.jsx
            │   ├── Loader/
            │   │   └── Loader.jsx
            │   ├── Navbar/
            │   │   └── Navbar.jsx
            │   └── Profile/
            │       ├── Favourites.jsx
            │       ├── MobileNav.jsx
            │       ├── OrderHistory.jsx
            │       ├── Settings.jsx
            │       └── Sidebar.jsx
            ├── pages/
            │   ├── AboutUs.jsx
            │   ├── AddBook.jsx
            │   ├── AllBooks.jsx
            │   ├── AllOrders.jsx
            │   ├── Cart.jsx
            │   ├── EditBook.jsx
            │   ├── Home.jsx
            │   ├── Login.jsx
            │   ├── Profile.jsx
            │   ├── SeeUserData.jsx
            │   └── SignUp.jsx
            └── store/
                ├── auth.js
                └── index.js
```
## 🌱 Roadmap

- Add payment gateway integration
- Implement book review system
- Develop recommendation engine
- Add multi-vendor support
- Implement PDF invoice generation

## 🤝 Contributing 

- Fork the Project
- Create your Feature Branch (git checkout -b feature/AmazingFeature)
- Commit your Changes (git commit -m 'Add some AmazingFeature')
- Push to the Branch (git push origin feature/AmazingFeature)
- Open a Pull Request

## 📜 License
- Distributed under the MIT License.

## 📬 Contact
- Email: [BhupeshBora](mailto:contact@bhupeshbora.in)