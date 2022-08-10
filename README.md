# SIGNAL CLONE

It is a clone of UI of Signal.\
The user can register with email instead of phone number, switch between Dark and Light colors, between Spanish and English languages and write messages in a basic global chat.\
Express in Node is used for the APIs.

Single Page Aplication (SPA)

The source code of the Backend is in the `main` branch
***
Branch: master\
Role: Frontend

**Stack:**

- Build tool: Vite
- Linter: ESLint and Prettier
- UI Library: React with TypeScript
- Styles: Sass, CSS Modules
- App State: Context API
- Routing: React Router
- WebSocket: socket.io

## Available Scripts

In the project directory, you can run:

### `pnpm dev`

Runs the app in the development mode.\
Open [http://localhost:5173/SIGNAL-CLONE/](http://localhost:5173/SIGNAL-CLONE/) to view it in the browser.

The page will reload if you make edits.

### `pnpm build`

Builds the app for production to the `dist` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

### `pnpm preview`

Runs the app that was built to the `dist` folder.\
Open [http://localhost:4173/SIGNAL-CLONE/](http://localhost:4173/SIGNAL-CLONE/) to view it in the browser.

### `npm run deploy`

Deploys to GitHub Pages the app that was built to the `dist` folder.\
The module `gh-pages` must be installed globally.\
The `vite.config.ts` file from Vite has configured a base path to deploy to GitHub Pages.