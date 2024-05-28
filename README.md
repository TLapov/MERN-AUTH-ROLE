<div align="left">

# MERN-AUTH-ROLE

## Overview
MERN-AUTH-ROLE is a simple authentication and role-based authorization system built with the MERN stack (MongoDB, Express, React, Node.js). This project allows users to log in, view home and about pages, and enables admin users to manage other users (create, update, delete).

## Features
- User registration and login
- Protected routes for authenticated users
- Role-based access control (Admin and User roles)
- Admin can manage users (CRUD operations)
- Responsive design using React Bootstrap

## Technologies Used
- **Frontend**: React, Redux, React Bootstrap, Typescript
- **Backend**: Node.js, Express
- **Database**: MongoDB

## Getting Started
To get started with this project, follow these steps:

### Prerequisites
Ensure you have the following installed:
- Node.js
- MongoDB

### Installation

1. **Clone the repository**:
    git clone https://github.com/TLapov/MERN-AUTH-ROLE.git
    cd MERN-AUTH-ROLE

2. **Install dependencies** (if any, otherwise skip this step):
   cd client
   npm install
   cd backend
   npm install
3. **Set up environment variables**
   PORT=your_port
   BASE_PATH = /api/v1
   MONGODB_CONN=your_mongodb_connection_string
   JWT=your_jwt_secret_key
4. **Create one admin in database**
   To manage users, you need to have at least one admin user in the database. You can create this admin user manually in MongoDb based on my user model
5. **Run application**
   cd client
   npm run dev
   cd backend
   npm start    

</div>


