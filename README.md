# Twig & Webpack Bolilerplate

You can build your projects very easy with this tools.

## Libraries and tools
- Webpack
- Twig
- Babel
- BrowserSync
- SASS
- Bootstrap

## How to install it?

1. Clone the project.
2. Install all the node dependencies with `npm i`. If you get an error, try to delete `node_modules` and `package-lock.json`, and reinstall.
3. Install all the php dependencies with `composer i`.

## How to Run it?

1. Set your PHP server in the project on the port 8888 or change the settings in the `webpack.config.dev.js` on the BroweserSync plugin.
2. Type on the console `npm run dev` for development purpose.


## Folder Structure

* SRC - This folder contains all the static files.
    - entryPoints - Contains the entry points that webpack takes and generate. 
        - fonts.js - Import all the webFonts files.
        - images.js - Import all the images file.
        - scripts.js - Import all the js files.
        - styles.js - Import all the css files.
    - fonts - Put all the fonts files.
    - images - Put all the images.
    - scripts - Put all the js files.
    - styles - put all the css and sass files.

* TEMPLATES - All the twig files.

* DISR - Folder that webpack generate. 


## How to deploy it?
Run `npm run build` and webpack generates all the files in production mode. Upload all the files except the src folder.