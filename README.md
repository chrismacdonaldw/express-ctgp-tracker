# CTGP Time Trials Site

This repository is a basic Express app with server rendered HTML that gives a nicer display of your time trials compared to CTGP's Chadsoft.co.uk site.

# Getting started

To get the Node server running locally:

- Clone this repository
- `npm install` to install all required dependencies
- `npm run start` to start the local server

# Code Overview

## Application Structure

- `app.js` - Application entry point. Middleware and routes are defined here.
- `controllers/` - This folder contains the controllers (routes) for the application, which are responsible for delegating data to view templates.
- `data/` - This folder contains JSON configuration files for listing both users and configurations for the site data.
- `helpers/` - This folder contains helper functions used within the controllers.
- `middlewares/` - This folder contains middlewares, of which there are only two. The two middleware within the application are responsible for delegating the config JSON data to routes.
- `views/` - This folder contains the view templates (using pug) which are generated server side.

## Editing users.json

Using the example users.json file, one can see that the only items required for the JSON file are the users name (both as the key and value for name key), and the user's simplified URL (for example, `/players/1F/401154EB4C8882.html`).

## Editing config.json

Relatively self-explanatory file. Icons are fetched from Font Awesome, so be sure to use one of their class names. Everything else is extremely easy to understand.

# Deploying

## Using Heroku

Deploying the app via Heroku is pretty easy. Fork the repository, change the config.json and users.json to your liking. Make sure your GitHub account is connected to Heroku and choose to deploy your forked repository.