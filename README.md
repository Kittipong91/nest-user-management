# 🚀 NestJS User Management API (MongoDB)

A robust User Authentication and Profile Management System built with **NestJS**, **MongoDB**, and **Passport JWT**. Designed with security and scalability in mind.

---

## 📌 Features

### 🔐 Authentication & Security
- **Secure Sign-up**: Register with unique username and email.
- **JWT-based Auth**: Secure login with stateless authentication.
- **Password Protection**: Hashing using `bcrypt` and strict validation rules.
- **RBAC**: Role-Based Access Control (Admin vs. User).

### 👤 User Profile
- **Get Profile**: Access personal data via secure token.
- **Edit Profile**: Update information (Firstname, Lastname) with `@Patch`.

### 🛠 Administrative Tools (Admin Management)
- **User List**: Retrieve all registered users.
- **Admin Control**: Find specific users or remove accounts.
- **Swagger Documentation**: Categorized tags for clear API navigation.

---

## 🛠 Tech Stack

- **Framework**: [NestJS](https://nestjs.com/) (v10+)
- **Database**: [MongoDB](https://www.mongodb.com/) via Mongoose
- **Validation**: `class-validator` & `class-transformer`
- **Security**: `@nestjs/jwt`, `passport-jwt`, `bcrypt`
- **Documentation**: `@nestjs/swagger` (OpenAPI)

---

## 📥 Installation

1. **Clone the repository**
   ```bash
   git clone <repo-url>
   cd <project-folder>

2. **Install dependencies**
   ```npm install

3. **Set up Environment Variables Create a .env file in the root directory:**
  - MONGODB_URI=mongodb://localhost:27017/your-db-name
  - JWT_SECRET=your_super_secret_key
  - PORT=3000

## 🚀 Running the App

# Development
npm run start:dev

## 📖 API Documentation (Swagger)
- *** Once the server is running, you can access the interactive API documentation at: 👉 *** 
# http://localhost:3000/api

## 🌐 Live Demo & Production

The application is successfully deployed on **Koyeb**. You can access the live API and documentation here:

- **🚀 Production URL:** `https://toxic-elisabet-kittipong-fea5c779.koyeb.app/`
- **📖 Live Swagger UI:** `https://toxic-elisabet-kittipong-fea5c779.koyeb.app/api`

---


