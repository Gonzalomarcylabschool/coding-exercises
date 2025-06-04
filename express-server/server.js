// server.js

const express = require('express');
const app = express();
const PORT = 3000;

const users = [
    { id: 1, name: 'Alice', age: 25 },
    { id: 2, name: 'Bob', age: 35 },
    { id: 3, name: 'Charlie', age: 45 }
];

app.get('/users', (req, res) => {
    const minAge = parseInt(req.query.minAge, 10);
    const maxAge = parseInt(req.query.maxAge, 10);

    if (!minAge || !maxAge) {
        return res.status(400).json({ error: 'Please provide minAge and maxAge.' });
    }

    const filteredUsers = users.filter(user => user.age >= minAge && user.age <= maxAge);
    res.json(filteredUsers);
});

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
