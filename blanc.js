const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'restscott',
    password: 'oracle',
    database: 'oracle'
});

connection.connect();

connection.query('SELECT * FROM blanc', (error, results, fields) => {
    if (error) throw error;
    console.log(results);
});

connection.end();