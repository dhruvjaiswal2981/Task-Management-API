### Task Management API

- This project is a Task Management API built with Node.js, Express, and MongoDB. The API supports CRUD operations for managing tasks and includes features like validation, filtering, pagination, and error handling.

## Features
- CRUD Operations:
    - Create, Read, Update, and Delete tasks.
- Task Fields:
    - title, description, status, priority, dueDate, createdAt, updatedAt.
- Validation:
    - Input validation using Joi.
- Filtering:
    - Query tasks by status and priority.
- Pagination:
    - Use limit and skip to fetch tasks in chunks.
- Error Handling:
    - Centralized error responses for consistency.

## Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/dhruvjaiswal2981/Task-Management-API.git
    cd Task-Management-API

2. Install dependencies:
    ```bash
    npm install

3. Set up environment variables:

- Create a .env file in the root of the project and add the following:
    ```bash
    PORT=5000
    MONGO_URI=mongodb://localhost:27017/taskdb


4. Start the application:
    ```bash
    npm start

## Technologies Used
- Node.js: Backend runtime.
- Express: Framework for building APIs.
- MongoDB: NoSQL database for data storage.
- Mongoose: ODM library for MongoDB.
- Joi: Input validation.

## Deployment
- Live Demo: The application is hosted on Render.
- Access it here: https://task-management-api-jt2v.onrender.com/