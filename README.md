# Coding Exercises

A collection of coding exercises including algorithms, React, Express, and PostgreSQL with Knex.js.

## Project Structure

```
coding-exercises/
│
├── mergeSortedArrays.js       // JavaScript algorithm
├── todo-app/
│   ├── App.jsx                // React Todo App
├── express-server/
│   └── server.js              // Express API exercise
├── knex-database/
│   └── database.js            // PostgreSQL queries with Knex.js
└── package.json               // Project dependencies
```

## Prerequisites

- Node.js (v14 or higher)
- PostgreSQL (v12 or higher)

## Setup

1. Clone the repository:
```bash
git clone <repository-url>
cd coding-exercises
```

2. Install dependencies:
```bash
npm install
```

3. Set up PostgreSQL:
- Create a database named 'coding_exercises'
- Update database connection details in `knex-database/database.js` if needed

## Running the Exercises

### Algorithm Exercise
```bash
node mergeSortedArrays.js
```

### Express Server
```bash
npm run start-server
```

### React Todo App
```bash
npm run start-react
```

### Database Exercise
```bash
node knex-database/database.js
```

## Technologies Used

- Node.js
- React
- Express.js
- PostgreSQL
- Knex.js 