# Boilerplate with webpack.

You can build your projects very easy with this tools.

## Libraries and tools

- Webpack
- Babel
- WebpackDevServer
- SASS

## How to install it?

1. Clone the project.
2. Install all the node dependencies with `npm i`. If you get an error, try to delete `node_modules` and `package-lock.json`, and reinstall.

## How to Run it?

1. Type `npm start` to start development server.

## Folder Structure

- SRC - This folder contains all the static files.

  - entryPoints - Contains the entry points that webpack takes and generate.
    - scripts.js - Import all the js files.
    - styles.js - Import all the css files.
  - fonts - Put all the fonts files.
  - images - Put all the images.
  - scripts - Put all the js files.
  - styles - put all the css and sass files.
  - templates - put all the HTML files.

- DIST - Folder that webpack generate.

## How to deploy it?

Run `npm run build` and webpack generates all the files in production mode. Upload all the files inside the dist folder.
