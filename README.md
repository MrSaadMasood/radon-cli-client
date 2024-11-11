# Radon CLI Frontend

This is a React-based frontend designed to simulate interaction with the Radon CLI, a developer tool for managing an in-memory key-value store, similar to Redis. This frontend is intended to showcase how developers can interact with the Radon key-value store, test and view the functionality in a user-friendly way.

## Install Radon-CLI
You can just npm install radon-cli as:
```
npm i radon-cli
```
Read the documentation at: [Radon-CLI](https://github.com/MrSaadMasood/radon)

## Features

- **Interactive Forms**: Set, get, and delete key-value pairs with TTL support.
- **Live JSON Display**: See JSON data output in real-time as you interact with the key-value store.
- **Keys Display**: View a list of keys with their respective TTL values.
- **Global Notifications**: Success and error notifications for operations.

## Installation

### 1. Clone the repository

```bash
git clone [<repository-url>](https://github.com/MrSaadMasood/radon-cli-client.git)
cd radon-cli-client
```

### 2. Install dependencies

Ensure you have [Node.js](https://nodejs.org/) installed, then run:

```bash
npm ci
```

### 3. Set up environment variables

Create a `.env` file at the project root and add your Radon CLI base URL:

```bash
VITE_BASE_URL=<YOUR_RADON_CLI_BASE_URL>
```

This base URL should point to the server running the Radon CLI backend.

### 4. Run the application

To start the development server, run:

```bash
npm run dev
```

The application will be accessible at `http://localhost:5173` by default.

## Purpose

The purpose of this frontend is to demonstrate how to interact with the Radon CLI key-value store. The UI provides forms to set, get, and delete keys, allowing users to visualize how data is stored and managed.

## Technologies Used

- **React**: For UI development
- **Tailwind CSS**: For styling
- **TypeScript**: For type safety

## License

This project is licensed under the MIT License.
