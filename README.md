# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

# Task manager

A React project about a task manager allows you to browse, add, update and delete tasks to users and watch your profile information.
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
- "react-hot-toast": For show if task was deleted or not

# Bonus points

- Add animation when a new task is added to the board
- Optimistic delete mutation


# Screenshots

Loading tasks

<img width="1792" alt="image" src="https://github.com/walter-ayala/TaskManager/assets/37197108/75e688f7-c4a8-4776-908f-3606d5e5baa7">


Dashboard page

<img width="1627" alt="image" src="https://github.com/walter-ayala/TaskManager/assets/37197108/da77e522-1883-4b11-9252-b0da21ce6e8e">


Dashboard mobile view

<img width="753" alt="image" src="https://github.com/walter-ayala/TaskManager/assets/37197108/36fbfbee-5427-48e6-a8e7-b68d50aa9e1f">


Modal for add task

<img width="1695" alt="image" src="https://github.com/walter-ayala/TaskManager/assets/37197108/bda125d8-94c5-4b18-9e4d-45f72ce613cc">


Animation when a new task is added to the board

<img width="1687" alt="image" src="https://github.com/walter-ayala/TaskManager/assets/37197108/d3a4234b-0388-4079-97bd-d67138d89b99">


Modal for delete task

<img width="1696" alt="image" src="https://github.com/walter-ayala/TaskManager/assets/37197108/6383f3f4-0896-48bf-9d91-f7bfd618eacc">


Settings page

<img width="1681" alt="image" src="https://github.com/walter-ayala/TaskManager/assets/37197108/1e615407-3e90-4a7e-9a95-285a341c7e79">


Settings mobile view

<img width="746" alt="image" src="https://github.com/walter-ayala/TaskManager/assets/37197108/8a7ed872-2e44-4d54-bacc-367abe8615f8">


Modal for edit task in mobile version

<img width="665" alt="image" src="https://github.com/walter-ayala/TaskManager/assets/37197108/50110372-f7d1-4454-96eb-94f4f9dbb40f">


Optimistic delete task

<img width="644" alt="image" src="https://github.com/walter-ayala/TaskManager/assets/37197108/0ba66352-7302-4374-b705-aee2c08201c4">





