# Salary Calculator

This project provides a salary calculator. You can access the project using one of the following methods:

## Method 1: Using Docker

> I wrote a Dockerfile to containerize the application. I also wrote a GitHub Actions file to push the Docker container to the Docker registry. This creates a complete CI pipeline that triggers when code is pushed to the main branch. This is the most efficient way to run the project, as it avoids potential version conflicts.

1. Install Docker on your operating system and give permissions to users (if you're using Ubuntu).
2. Pull the Docker image of this project from Docker Hub using the following command:

    ```bash
    docker pull rangadm/salary-calculator-2024-q1-rangadm:latest
    ```

3. Run the following command to see the images that you've pulled:

    ```bash
    docker images
    ```

4. Run the Docker image using the following command:

    ```bash
    docker run -p 5001:3000 rangadm/salary-calculator-2024-q1-rangadm:latest
    ```

5. You can see the running Docker containers using the following command:

    ```bash
    docker ps
    ```

6. Visit [http://localhost:5001](http://localhost:5001) to see the application.

## Method 2: Cloning the Git Project

1. Make sure you have Node.js installed in your environment.
2. Clone the Git repository:

    ```bash
    git clone https://github.com/RangaDM/salary-calculator-2024-Q1-RangaDM.git
    ```

3. Open the project in Visual Studio Code.
4. Run the following command in the terminal to install the dependencies:

    ```bash
    npm install
    ```

5. Run the following command in the terminal to start the application:

    ```bash
    npm start
    ```

## Method 3: Visiting the Website Directly

I wrote complete GitHub Actions code for testing and deploying the project on GitHub Pages. So, you can visit the website directly from [https://rangadm.github.io/salary-calculator-2024-Q1-RangaDM/](https://rangadm.github.io/salary-calculator-2024-Q1-RangaDM/).

If you're facing any issues when running the project, please contact me. Thank you!