var express = require('express');
var app = express();
var path = require('path');
app.use(express.static(path.join(__dirname + '/public')));
app.use('/css', express.static(__dirname + '/css'));

// set the view engine to ejs
app.set('view engine', 'ejs');
// use res.render to load up an ejs view file

// index page
app.get('/', function (req, res) {
    res.render('index');
});

// Hobbies page
app.get('/hobbies', function (req, res) {
    res.render('hobbies');
});

//experience page

app.get('/experience', function (req, res) {
    res.render('experience');
});

//Web Projects page

app.get('/webProjects', function (req, res) {
    res.render('webProjects');
});

app.listen(8080);
console.log('Server is listening on port 8080');
