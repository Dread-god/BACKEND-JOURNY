# Express Router & Modular Routing – Day 23

This project demonstrates how to structure an Express.js application using **routers** to keep the codebase modular, clean, and scalable.

## Objective

- Understand Express Router
- Separate routes into different files
- Mount routers on a base path
- Improve project structure for larger applications

## Project Structure

DAY-23/
│── index.js
│── package.json
│── routes/
└── notes.js


## Explanation

### index.js
- Creates the Express app
- Imports the notes router
- Mounts it on `/notes`

### routes/notes.js
- Uses `express.Router()`
- Handles note-related routes
- Keeps routing logic isolated

## Routes

### GET `/notes`
Returns all notes.

**Response**


### POST `/notes`
Simulates note creation.

**Response**

## Key Learnings

- Express Router helps organize routes
- Modular routing improves maintainability
- Common pattern used in real-world backend projects

## Tech Stack

- Node.js
- Express.js

## Notes

- This is part of a 30-day GitHub code consistency challenge
- Focused on backend fundamentals and clean architecture
