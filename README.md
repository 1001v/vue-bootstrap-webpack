# Vue.js 2, Bootstrap 4, Webpack 4 quickstart
This repo contains simple vue.js app example with included bootstrap.css and full-featured webpack 4 configuration to build all things together. 

## Features
* vue components (.vue) support
* sass/scss support
* postcss support
* css extraction
* babel transpiler and babel-polyfills injection support
* dev server (with hot module replacement), dev build and production build configurated
* separate vendor bundle
* auto-injection of all bundles to index.html (with hash)
* sourcemaps
* necessary optimization for production (minify, uglify)

## Getting started

##### Clone this repo and enter the dir
```
git clone https://github.com/1001v/vue-bootstrap-webpack.git ./vue-bootstrap-webpack
cd vue-bootstrap-webpack
```
##### Install dependencies
```
npm install
```

##### Run dev server
```
npm run dev
```

## Available build strategies

### Dev server
```npm run dev```
This would build your app using dev environment and open webpack dev server
##### Features
* hot module replacement
* autoreload on changes

### Dev build
```npm run build-dev```
This would build your app using dev environment
##### Features
* sourcemaps
* vendor.js and main.js bundles

### Production build
```npm run build```
This would build your app using production environment
##### Features
* minify css and js, uglify js
* autoprefixer
* babel transformation to es2015
* babel-polyfills injection
* css, vendor.js and main.js bundles
