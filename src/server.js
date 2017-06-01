const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 3001;

app.use(express.static(path.join(__dirname, '..', 'public')));

app.get('/:slug', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'public', `${req.params.slug}.html`));
});

app.listen(port, () => {
  console.log(`It all begins... on ${port}`);
});
