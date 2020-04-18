var express = require ('express');
var nunjucks  = require('nunjucks');
var app = express();
app.use(express.static(__dirname + '/static'));

nunjucks.configure('', {
    autoescape: true,
    express: app
});

app.get('/', function(req, res) {
    res.render('index.html');
});

app.get('/inputs_forms', function(req, res) {
    res.render('forms_inputs.html');
});

app.get('/formating', function(req, res) {
    res.render('formating.html');
});

app.get('/links', function(req, res) {
    res.render('links.html');
});

app.get('/videohtml', function(req, res) {
    res.render('videohtml.html');
});

app.get('/image', function(req, res) {
    res.render('image.html');
});

app.get('/grid', function(req, res) {
    res.render('grid.html');
});

app.get('/flexbox', function(req, res) {
    res.render('flexbox.html');
});

app.get('/colors', function(req, res) {
    res.render('colors.html');
});

app.get('/box_model', function(req, res) {
    res.render('box_model.html');
});

app.get('/dropdown', function(req, res) {
    res.render('dropdown.html');
});

app.get('/tables', function(req, res) {
    res.render('tables.html');
});

app.listen(3000, function() {
    console.log('Example app listening on port 3000...');
});