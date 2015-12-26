const express = require('express');
const parser = require('body-parser');
const app = express();

app.set('views', './views');
app.set('view engine', 'jade');

app.use(parser.urlencoded({ extended: true }));

app.get('/', function(req, res) {
  res.render('index');
});

app.post('/', function(req, res) {
  res.render('index', { message: req.body.message });
});

app.listen(3000);
