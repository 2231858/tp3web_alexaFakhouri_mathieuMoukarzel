const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'restscott',
    password: 'oracle',
    database: 'oracle'
});

var name = document.getElementById('name').ariaValueMax;
var email = document.getElementById('mail').ariaValueMax;
var team = document.getElementById('team').ariaValueMax;

connection.connect();

const nouvJoueur = { nom: name, couriel: email, equipe: team };

function insrt(nouvJoueur) {
    if (nouvJoueur.equipe = mauve) {
        connection.query('INSERT INTO mauve SET ?', nouvJoueur, (error, results, fields) => {
            if (error) throw error;
            console.log('Nouvel enregistrement inséré avec succès.');
        });
    };
    if (nouvJoueur.equipe = blanc) {
        connection.query('INSERT INTO blanc SET ?', nouvJoueur, (error, results, fields) => {
            if (error) throw error;
            console.log('Nouvel enregistrement inséré avec succès.');
        });
    };
    if (nouvJoueur.equipe = rose) {
        connection.query('INSERT INTO rose SET ?', nouvJoueur, (error, results, fields) => {
            if (error) throw error;
            console.log('Nouvel enregistrement inséré avec succès.');
        });
    };
    if (nouvJoueur.equipe = brun) {
        connection.query('INSERT INTO brun SET ?', nouvJoueur, (error, results, fields) => {
            if (error) throw error;
            console.log('Nouvel enregistrement inséré avec succès.');
        });
    };

}

connection.end();