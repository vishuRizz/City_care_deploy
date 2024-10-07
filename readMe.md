# CityCare SmartBU

## Description
CityCare SmartBU is a web application that helps users manage healthcare services. This repository contains both the server-side and client-side code.

## Getting Started

### Prerequisites
- **Node.js**: Make sure you have Node.js installed. You can download it [here](https://nodejs.org/).
- **npm**: Node.js comes with npm, the package manager for JavaScript, but ensure it is up-to-date by running:
    ```bash
    npm install -g npm
    ```

### Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/yourusername/CityCare-smartBU.git
    ```

2. Install the necessary Node.js modules:
    ```bash
    npm install
    ```

### Running the Project

#### 1. Start the Server

- Navigate to the `Server_side` directory:
    ```bash
    cd Server_side
    ```

- Install the required server-side dependencies:
    ```bash
    npm install
    ```

- Start the server:
    ```bash
    node index.js
    ```

#### 2. Start the Client

- Open a **new terminal** window and navigate to the `Client_side` directory:
    ```bash
    cd Client_side
    ```

- Install the required client-side dependencies:
    ```bash
    npm install
    ```

- Start the client application:
    ```bash
    npm run dev
    ```

### Accessing the Application

Once both the server and client are running:
- Open your browser and go to `http://localhost:3000` to access the application.

### Troubleshooting
- If you encounter any issues, make sure that both the server and client are running in separate terminals.
- Ensure you have the correct version of Node.js installed.
- Check the terminal logs for any errors and try resolving them by reinstalling dependencies or killing any processes occupying the same port.

### Contributing
Feel free to contribute to this project. Please fork the repository and submit pull requests.

### License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
