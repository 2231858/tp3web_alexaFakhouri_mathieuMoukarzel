const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'restscott',
    password: 'oracle',
    database: 'oracle'
});

connection.query('SELECT * FROM mauve', (error, results, fields) => {
    if (error) throw error;
    console.log(results);
});