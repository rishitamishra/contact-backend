# Contact Manager API

A simple backend REST API for managing contacts. Built using **Node.js**, **Express**, and **MongoDB**. It allows users to register, log in, and manage their personal contact list with full CRUD functionality.

## 🔧 Tech Stack

- **Node.js**
- **Express.js**
- **MongoDB** with Mongoose
- **JWT Authentication**
- **Tailwind CSS (Frontend Styling if applicable)**

---

## 📦 Features

- ✅ User Registration & Login (with JWT)
- ✅ Create, Read, Update, Delete (CRUD) Contacts
- ✅ Beautiful UI built with Tailwind CSS (if connected with frontend)
- ✅ RESTful API structure
- ✅ Error handling middleware
- ✅ Secure routes with auth middleware

---

## 🛠️ API Endpoints

### 🧑 User

| Method | Endpoint        | Description             |
|--------|------------------|-------------------------|
| POST   | `/api/users/register` | Register a new user     |
| POST   | `/api/users/login`    | Login and receive token |

### 📇 Contacts

| Method | Endpoint             | Description              |
|--------|-----------------------|--------------------------|
| GET    | `/api/contacts`       | Get all user contacts    |
| POST   | `/api/contacts`       | Add a new contact        |
| GET    | `/api/contacts/:id`   | Get contact by ID        |
| PUT    | `/api/contacts/:id`   | Update contact by ID     |
| DELETE | `/api/contacts/:id`   | Delete contact by ID     |

> 🔐 All contact routes are protected and require JWT token.

---

## 🚀 Getting Started

1. **Clone the repository**  
   ```bash
   git clone https://github.com/your-username/contact-manager-api.git
   cd contact-manager-api
