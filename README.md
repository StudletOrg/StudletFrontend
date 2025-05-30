# Studlet Frontend Documentation

This is a React frontend for the Studlet application. It is built with [TypeScript](https://www.typescriptlang.org/) programming language and Create React App script. Also it uses [react-router-dom](https://www.npmjs.com/package/react-router-dom) for client-side routing [bootstrap](https://getbootstrap.com/) for styling and [react-bootstrap](https://www.npmjs.com/package/react-bootstrap) for bootstrap components in React, and [axios](https://www.npmjs.com/package/axios) for HTTP requests, and [react-cookie](https://www.npmjs.com/package/react-cookie) for handling cookies.

Documentation is generated using [typedoc](https://typedoc.org/) and [typedoc-plugin-markdown](https://www.npmjs.com/package/typedoc-plugin-markdown). And then it is merged using [concat-md](https://www.npmjs.com/package/concat-md) and [pandoc](https://pandoc.org/) to convert it to a pdf file.

## Project members

- Kamil Opara
- Marceli Nowak
- Maciej Kurek

## Folder Structure

The project is organized as follows:

- `public/`: static resources, such as images and the favicon
- `src/`: the source code for the frontend
	- `img/`: folder with images used by the typescript code
	- `model/`: data models for the app
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
