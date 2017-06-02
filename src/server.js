// We will be writing our server here
const express = require('express');
const path = require('path');
const hbs = require('hbs');

const app = express();
const port = process.env.PORT || 3001;

app.use(express.static(path.join(__dirname, '..', 'public')));

app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));

app.get('/:route', (req, res) => {
  res.render('index', { route: req.params.route });
});

//app.get('/favourites', (req, res) => {
//res.render('index', { route: 'favourites' });
//});

//app.get('/add', (req, res) => {
//res.render('index', { route: 'add' });
//});

app.listen(port, () => {
  console.log(`It all begins... on ${port}`);
});
