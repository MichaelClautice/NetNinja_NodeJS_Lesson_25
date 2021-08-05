// Michael Clautice, Richmond, VA
// The Net Ninja - NodeJS Tutorial for Beginners
// Lesson 25 - Template Engines 1
//-----------
// WHAT THIS APP DOES------
// xxxxxxxxxxxxx

// require the installed express pkg
const express = require('express');

// create the express app
const app = express();

// select EJS as the template-view engine
app.set('view engine', 'ejs');

// route that resp to a static client req for home pg
app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html');
});

// route that resp to a static client req for contact pg
app.get('/contact', function (req, res) {
    res.sendFile(__dirname + '/contact.html');
});

// route that resp to a dynamic client req for a specific profile ID
app.get('/profile/:name', function (req, res) {
    var data = {age: 29, job: 'ninja'};
    res.render('profile.ejs', {person: req.params.name, moreData: data});
});

// listen for port 3000
app.listen(3000);

// con.log a test mssg
global.console.log('\n"Hey! The server now listening to Port 3000, Yall!"\n');