# React Book Tracking App

This is a project made using React, which allows you to select and categorize books you have read, are currently reading, or want to read. App provides an API server and client library. Project made as part of Udacity Nanodegree Program: Front-End Web Developer course.


## To get started

Open terminal in project folder and:

* install all project dependencies with `npm install`
* start the server with `npm start`

## Create React App

This project was bootstrapped with [Create React App.](https://github.com/facebook/create-react-app)

## App functionality

In this application, the main page displays a list of "shelves" (i.e. categories), each of which contains a number of books. Each book has a control that lets you select the shelf for that book. When you select a different shelf, the book moves there. Note that the default value for the control should always be the current shelf the book is in.

### Search functionality

The backend API uses a fixed set of cached search results and is limited to a particular set of search terms, which can be found in SEARCH_TERMS.md.