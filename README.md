# Studlet Frontend

This is a React frontend for the Studlet platform. It is built with Create React App and uses React Router for client-side routing.

## Folder Structure

The project is organized as follows:

- `public/`: static resources, such as images and the favicon
- `src/`: the source code for the frontend
    - `img/`: folder with images used by the typescript code
	- `model/`: data models for the app
	- `setupTests.ts`: Jest setup file
	- `App.tsx`: the main application component
	- `index.tsx`: the entry point for the app
    - `*.tsx`: other TypeScript files in the src directory with components
- `.env`: environment variables for the app (see below)

## Cloning the Repository

To clone the repository, run the following command:

```bash
git clone https://github.com/StudletOrg/StudletFrontend.git
```

## Environment Variables

The app expects the following environment variables to be set:

- `REACT_APP_API_URL`: the URL of the Studlet Backend API server

To set these variables, create a `.env` file in the root of the project and add the following lines:

```bash
REACT_APP_API_URL="http://localhost:8080"
```

## Running the App

To run the app, navigate to the root of the project and run the following command:

```bash
npm start
```

This will start the development server and open the app in a browser.
