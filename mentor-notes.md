# Notes

## `sendFile`

app.get('/favourites', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'public', 'favourites.html'));
});
