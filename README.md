# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

# Task manager

A React project about a task manager allows you to browse, add, update adn delete tasks to users and watch your profile information.
I implemented luxon, styled-components, graphql with Apollo client and also i used Standard with TypeScript.

I chose that folder structure because I consider that it facilitates the classification and search of files, 
because it is very intuitive to find or know what each folder contains. Inside the api, components and hooks folders, 
I created a folder that contains what each of the screens needs, in hooks it was not necessary to create the Dashboard folder 
but I did it thinking at once in case the project would grow and need new modules or pages. Also I separate the functions and components so that each one is responsible for a specific function.

# Setup/Running instructions

In the project directory, you must run "npm install", to install dependencies

Then you can run "npm run dev" to runs the app in the development mode.

Open http://localhost:5173/ 

# Technologies/libraries

- "graphql": For query the database
- "@apollo/client": For manage both local and remote data with GraphQL
- "luxon": for dealing with dates and times
- "react-datepicker":  A Datepicker component that enable select a date in an intuitive way for the user
- "styled-components": For write CSS code to style the components
- "canvas-confetti": For show a cool animation when a new task is added to the board

# Screenshots

