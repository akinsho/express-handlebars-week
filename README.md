# Resource share - A full-stack web app

## Week objective

Over the course of the week we will be building a resource share full stack web application. We will be using some new technologies so we will build some elements of the application together.

Here an example of the app we will be building: [Add link to live app](http://LINK-HERE).

## About Express

Express.js is a Node.js web application server framework, designed for building single-page, multi-page, and hybrid web applications. It is the most downloaded Node.js server framework. Here is a link to [more information about Express](./express-introduction.md).

## Learning outcomes

Follow the steps outlined below and you will learn the following:

* Learn how to set up express server
* Learn how to use express middleware, for example, to serve static assets
* Understand the purpose of templating
* Learn how to use templating with handlebars
* Learn how to set up [an animated app drawer](http://www.material-ui.com/#/components/drawer)
* Learn how to add tests to your Express app
* Learn how set up continuous integration with Travis CI
* Learn how to integrate postgreSQL database with an Express app
* Learn how to deploy your app to Heroku
* Learn how to set up OAuth with an express server




<!-- ****************************************************** -->
## Workshop 1 - Setup an Express server

### Step 1 - Setup a basic [express server (code along)](https://expressjs.com/en/starter/hello-world.html)

1. Fork this repository
1. Clone your forked repository `git clone [link to your repo here]`
1. Install all dependencies `npm install`
1. Open `server.js` and let's set up a server
1. Install express `npm install express`

### `/src/server.js`
1. Require express and instantiate the app server and create a port variable

``` javascript
const express = require('express');

const app = express();
const port = process.env.PORT || 3001;
```

1. Create a handler for the home route and send the response, finally, set
   server to listen for connections on the port

``` javascript
app.get('/', (req, res) => {
  res.send('Hello World');
});

app.listen(port, () => {
  console.log(`It all begins... on ${port}`);
});
```

### Step 2 - Serve static assets using [static middleware](https://expressjs.com/en/starter/static-files.html) (code along)

### `/src/server.js`
1. Use static middleware. Express has `static` method which can be used to serve static assets (e.g. html, css, js). Replace `app.get()` with `app.use()`.

``` javascript
// Add path dependency
const path = require('path');

app.use(express.static(path.join(__dirname, '..', 'public')));
```

### Step 3 - Handle different [routes] (https://expressjs.com/en/guide/routing.html) (code along)

1. Create handlers for individual routes
### `/src/server.js`

``` javascript
app.get('/favourites', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'public', 'favourites.html'));
});

app.get('/add', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'public', 'add.html'));
});
```

1. Replace the above with one handler for all routes
### `/src/server.js`

``` javascript
app.get('/:slug', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'public', `${req.params.slug}.html`));
});
```

<!-- ****************************************************** -->
## Workshop 2 - Animated app drawer

### Step 1 - ...(code along)

<!-- ****************************************************** -->
## Workshop 3 - [Templating with Handlebars](https://expressjs.com/en/guide/using-template-engines.html)




### Step 1 - ...(code along)

<!-- ****************************************************** -->
## Workshop 4 - Testing with continuous integration

### Step 1 - ...(code along)

<!-- ****************************************************** -->
## Workshop 5 - Integrate postgreSQL database and deploy to Heroku

### Step 1 - ...(code along)

<!-- ****************************************************** -->
## Workshop 6 - Integrate authentication

### Step 1 - ...(code along)
