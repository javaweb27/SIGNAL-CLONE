# SIGNAL CLONE

It is a clone of UI of Signal.\
The user can switch between Dark and Light colors, between Spanish and English languages and write messages in a basic global chat.\
Context API from React is used to handle the state and for real-time communication is used socket.io with Express in Node.

Single Page Aplication (SPA)

The source code of the Backend is in the `main` branch

## Available Scripts

In the project directory, you can run:

### `yarn dev`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.

### `yarn build`

Builds the app for production to the `dist` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

### `yarn preview`

Runs the app that was built to the `dist` folder.
Open [http://localhost:4173](http://localhost:4173) to view it in the browser.

### `yarn deploy`

Deploys to GitHub Pages the app that was built to the `dist` folder.\
The module `gh-pages` must be installed globally.\
The `vite.config.js` file from Vite has configured a base path to deploy to GitHub Pages.