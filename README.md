# User Activity Tracker App

## Table of Contents

- [Overview](#overview)
- [Dependencies](#dependencies)
  - [React Libraries](#react-libraries)
  - [Node Libraries](#node-libraries)
- [Running the App](#running-the-app)
- [App Walkthrough](#app-walkthrough)

## Overview

This is a simple application with an employees dashboard page and a user authentication page. The live application is available at https://pacific-crag-93194.herokuapp.com/.

- The app uses NodeJS with Express as the backend server which provides the input data.
- The front-end is built using the ReactJS library with Redux for state management.

The React application was created inside the Node application in the `client` directory. This type of architecture was chosen to route all requests to the same domain, thereby eliminating the need to host the frontend and backend servers seperately.

This also facilitates concurrent running of both servers in the dev environment.

A proxy middleware has been added on the client side to enable redirection of api requests to the backend server in the development environment. This proxy middleware layer gets dropped in production as all requests use the same domain.

## Dependencies

### React Libraries:

- axios - to make network requests to the backend server.
- redux - to delegate application state management to redux system.
- react-redux - to wire up the react application to effectively use the redux system.
- redux-thunk - to enable redux action creators to dispatch asynchronous funtions.
- redux-form - to delegate the state management of form elements to the redux-form system.
- react-router-dom - to add routing capability to the react application.
- http-proxy-middleware - to enable redirection of api requests to the backend server in the dev environment.
- semantic-ui - to use the Semantic UI css library (added as cdn link in index.html).

### Node Libraries:

- express - to use the express library to build the node application.
- body-parser - to parse the request body of the incoming API requests.
- nodemon - to enable server auto-restart upon changing content in dev environment.
- concurrently - to facilitate concurrent running of both servers in the dev environment.

## Running the App

Follow the steps given below to set up and run this application in your local environment:

1. Download and install [NodeJS](https://nodejs.org/en/download/).
2. Download the source code and extract the zip file or clone the repository.
3. Open your terminal in the root directory of the project.
4. Install the npm node modules by running the command `npm install`.
5. Go to the `client` directory and install the client dependencies by running the command `npm install`.
6. Once all the dependencies are installed, go back to the project's root directory and run the command `npm run dev` to start the servers.
7. The node server will run on port 5000 and the react server will run on port 3000.
8. If these ports are already in use, kindly stop the servers using them and try again.
9. The application will open on your default browser at http://localhost:3000.

## App Walkthrough

1. The landing page is also the login page for this application displaying the login form.
2. Enter the correct login credentials (as given in the `login.json` file) and click the `Login` button.
3. Upon successful authentication, you will be redirected to the Employees Dashboard page.
4. The Dashboard page displays the list of all the employees as given in the `employees.json` file.
5. Click on one of the employees' cards to see the employee's detail.
6. A modal should open displaying the full details of that employee.
7. You can click on the `x` button to close the modal.
8. When you're done, you can click the `Logout` button on the header to log out from the application. This will redirect you back to the Login page.

Note - Please use only the browser's device toolbar for responsiveness testing.
