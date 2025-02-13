const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
const app = express();
const port = 3000;

// JWT secret (though it is not used in this example, it could be part of authentication later)
const jwtSecret = 'your-secret-key';

// Create a MySQL connection
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'tenisuj'
});

// Enable CORS
app.use(cors());

// Connect to MySQL
connection.connect(err => {
    if (err) {
        console.error('Error connecting to MySQL:', err);
        return;
    }
    console.log('Connected to MySQL');
});

// Log all SQL queries (equivalent to spring.jpa.show-sql=true)
connection.on('enqueue', function(sequence) {
    if ('Query' === sequence.constructor.name) {
        console.log(sequence.sql);
    }
});

// Define a route to fetch player data
app.get('/players', (req, res) => {
    connection.query('SELECT * FROM players', (err, results) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.json(results);
        }
    });
});

// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});
