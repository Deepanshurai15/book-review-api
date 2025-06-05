# 📚 Book Review API

A RESTful API built with Node.js, Express, and MongoDB for managing user authentication, books, and reviews. This API supports user signup/login, adding/searching books, and creating/updating/deleting reviews with JWT-based authentication.

---

## 🚀 Features

- User signup and login with hashed passwords  
- JWT authentication and authorization  
- Add, list, search books with pagination and filtering  
- Add, update, delete reviews for books  
- View average ratings and recent reviews for books  
- Environment variables management with `.env`  

---

## 🧰 Technologies Used

- Node.js  
- Express.js  
- MongoDB with Mongoose  
- JSON Web Tokens (JWT)  
- bcrypt for password hashing  
- dotenv for environment variables  

---


## ⚙️ Setup Instructions

### 1. Clone the repository

```bash
git clone https://github.com/<your-username>/book-review-api.git
cd book-review-api

```

### 2. Install dependencies 

- npm install


### 3. Setup environment variables

- cp env.example .env
- and update the .env file according to the insctructions given it.


### 4. Run the API server

- npm start
- the server will run at port 3000


---


### Use postman to check the API response

- Include JWT token in requests requiring authentication via the Authorization header:
  Authorization: Bearer <your_jwt_token>

### Example request body 

- Signup/Login
  {
  "username": "user1",
  "password": "password123"
  }

- Add book
  {
  "title": "The Great Gatsby",
  "author": "F. Scott Fitzgerald",
  "genre": "Classic"
  }

- Add review
  {
  "rating": 5,
  "comment": "A timeless classic!"
  }

----- 

###  Just replace `<your-username>` in the clone URL with your GitHub username and you’re good to go! 🚀🚀🚀🚀🚀🚀🚀

