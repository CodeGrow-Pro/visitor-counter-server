# Visitor Counter App

This repository contains the backend code for a Visitor Counter application. The application tracks and displays the number of visitors for the current and last month.

## Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js installed on your machine. You can download it [here](https://nodejs.org/).
- MongoDB installed and running. You can download it [here](https://www.mongodb.com/try/download/community).
- Git installed on your machine. You can download it [here](https://git-scm.com/).
- GitHub account for repository access.

## Getting Started

Follow these steps to get the server up and running:

1. **Clone the Repository:**

    ```bash
    git clone https://github.com/CodeGrow-Pro/visitor-counter-backend.git
    cd visitor-counter-backend
    ```

2. **Install Dependencies:**

    ```bash
    npm install
    ```

3. **Set Up Environment Variables:**

    Create a `.env` file in the root directory and add the following:

    ```env
    MONGO_URI=your_mongo_database_uri
    ```

    Replace `your_mongo_database_uri` with your MongoDB connection string .

4. **Start the Server:**

    ```bash
    npm start
    ```

    The server will start, and you should see the message "Server is running on PORT: 8080."

5. **Access the API:**

    The API will be available at:

    - [http://localhost:8080/visitor-count/api/v1/get-visitor-count](http://localhost:8080/visitor-count/api/v1/get-visitor-count) (To get visitor counts)
    - [http://localhost:8080/visitor-count/api/v1/visitor-count/increment](http://localhost:8080/visitor-count/api/v1/visitor-count/increment) (To increment visitor count)

## Additional Configuration

- You can customize other configuration options in the `.env` file as needed.
