<img src="https://devmounta.in/img/logowhiteblue.png" width="250" align="right">

# Project Summary

In this project, we'll create a node back-end for DevMountain's swag shop. We'll make the back-end capable of registering users, logging in users, keeping track of guests, managing a shopping cart, and serving a pre-built React front-end. At the end of the project you'll be able to test your endpoints with Postman and the given front-end.

## Step 1

### Summary

In this step, we'll install, save, and require the npm packages we'll need.

### Instructions

* Run `npm install --save express body-parser express-session`.
* Open `server/index.js` and require all the packages at the top of the file.

### Solution

<details>

<summary> <code> server/index.js </code> </summary>

```js
const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
```

</details>

## Step 2

### Summary

In this step, we'll create an express `app`, use our `body-parser` and `session` middleware, and have our server listen on port `3000`.

### Instructions

* Open `server/index.js`.
* Create an express app.
* Create middleware that use `body-parser` and `session`.
  * Don't forget to pass in the configuration object into `session`. The object should have a `secret`, `resave`, and `saveUninitialized` parameter.

<details>

<summary> Detailed Instructions </summary>

<br />

Now that `index.js` has access to all the packages, let's create an express application. Create a variable called `app` and set it equal to `express` invoked. 

```js
const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');

const app = express();
```

We can then add middleware to the app. Let's add `bodyParser.json` so we can read JSON from the request body and add `session` so we can create sessions. Remember that `session` needs a configuration object as the first argument. The object should have a `secret`, `resave`, and `saveUninitialized` property. `secret` can be any string you like and `resave` and `saveUninitialized` should equal `false`.

```js
const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');

const app = express();
app.use( bodyParser.json() );
app.use( session({
  secret: '@nyth!ng y0u w@nT',
  resave: false,
  saveUninitialized: false
}));
```

Finally, let's have our app `listen` on port 3000.

```js
const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');

const app = express();
app.use( bodyParser.json() );
app.use( session({
  secret: '@nyth!ng y0u w@nT',
  resave: false,
  saveUninitialized: false
}));

const port = 3000;
app.listen( port, () => { console.log(`Server listening on port ${port}.`); } );
```

</details>

### Solution

<details>

<summary> <code> server/index.js </code> </summary>

```js
const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');

const app = express();
app.use( bodyParser.json() );
app.use( session({
  secret: '@nyth!ng y0u w@nT',
  resave: false,
  saveUninitialized: false
}));

const port = 3000;
app.listen( port, () => { console.log(`Server listening on port ${port}.`); } );
```

</details>

## Step 3 

### Summary

In this step, we'll add custom middleware that will check to see if a session has been created. If a session hasn't been made yet we'll create a `user` object that keeps track of a user's `username`, `cart`, and `total`.

### Instructions

* Create a folder called `middlewares` in `server/`.
* Create a file called `checkForSession.js` in `server/middlewares/`.
* Open `server/middlewares/checkForSession.js`.
* Export a function that has a `req`, `res`, and `next` parameter.
* Check if the `req.session` has a `user` object.
  * If the session doesn't have it, add it to the session.
    * User object: `{ username: '', cart: [], total: 0 }`.
  * If the session does have it, call `next`.

<details>

<summary> Detailed Instructions </summary>



</details>

### Solution

<details>

<summary> <code> server/middlewares/checkForSession.js </code> </summary>

```js
module.exports = function( req, res, next ) {
  const { session } = req;

  if ( !session.user ) {
    session.user = { username: '', cart: [], total: 0.00 };
  } 
  
  next();
};
```

</details>

## Step 4

### Summary

In this step, we'll require our middleware in `index.js` and add it to `app`.

### Instructions

* Require `server/middlewares/checkForSession.js`.
* Use `app.use` to add `checkForSession`.

### Solution

<details>

<summary> <code> server/index.js </code> </summary>

```js
const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');

const checkForSession = require('./middlewares/checkForSession');

const app = express();

app.use( bodyParser.json() );
app.use( session({
  secret: '@nyth!ng y0u w@nT',
  resave: false,
  saveUninitialized: false
}));
app.use( checkForSession );

const port = 3000;
app.listen( port, () => { console.log(`Server listening on port ${port}.`); } );
```

</details>

## Step 5

### Summary

In this step, we'll create a swag controller that can `read` the swag from `models/swag` and send it in a response. We'll also require it in `server/index.js` and create an endpoint.

### Instructions

* Create a folder called `controllers` in `server/`.
* Create a file called `swag_controller.js` in `server/controllers/`.
* Open `server/controllers/swag_controller.js`.
* Require `swag` from `server/models/swag`. 
  * This is just an array of swag objects.
* Export an object with a `read` method that has a `req`, `res`, and `next` parameter. 
  * The `read` method should use `res` to send a status of 200 with the `swag` array.
* Open `server/index.js`.
* Require the swag controller.
* Create a `GET` endpoint at `/api/swag` that calls the `read` method from the swag controller.
* Hit `http://localhost:3000/api/swag` in postman to make sure you are getting the swag array.

<details>

<summary> <code> Detailed Instructions </code> </summary>

<br />

</details>

### Solution

<details>

<summary> <code> server/controllers/swag_controller.js </code> </summary>

```js
const swag = require('../models/swag');

module.exports = {
  read: ( req, res, next ) => {
    res.status(200).send( swag );
  }
};
```

</details>

<details>

<summary> <code> server/index.js </code> </summary>

```js
const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');

// Middleware
const checkForSession = require('./middlewares/checkForSession');

// Controllers
const swag_controller = require('./controllers/swag_controller');

const app = express();

app.use( bodyParser.json() );
app.use( session({
  secret: '@nyth!ng y0u w@nT',
  resave: false,
  saveUninitialized: false
}));
app.use( checkForSession );

// Swag
app.get( '/api/swag', swag_controller.read );

const port = 3000;
app.listen( port, () => { console.log(`Server listening on port ${port}.`); } );
```

</details>

## Step 6

### Summary

In this step, we'll create a authorization controller that can handle logging in, registering, signing out, and also reading the user from `req.session`.

### Instructions

* Create an `auth_controller.js` in `server/controllers/`.
* Open `server/controllers/auth_controller.js`.
* At the top of the file require users from `models/users`.
  * This is where the users are kept after registering.
  * A user object looks like: `{ id: integer, username: string, password: string }`
* Underneath the require for `users`, add an `id` variable that equals `1`.
  * We'll increment this by one to make sure no users can have the same `id`.
* Export an object with a `login`, `register`, `signout`, and `getUser` method.
  * All methods should capture `req`, `res`, and `next` as parameters.
* `login` should look on the request body for a `username` and `password`. It should then see if a user from the `users` array matches that `username` and `password` combination.
  * If the method finds a user, return a status of 200 with the user object. The method should also update the value of `username` of the session to the user's username.
  * If the method doesn't find a user, return a status of 500.
* For simplicity, we aren't going to do any verification on register. The `register` method should just push to the array of `users` an object with an `id`, `username`, and `password`. `username` and `password` will both be on the request body. It should increment the value of `id` after pushing to `users` and also update the value of `username` to the user's `username` on the request session.
  * The method should also send a status of 200 and the request session's user object.
* `signout` should destroy the session using `req.session.destroy()` and then return the `req.session` object.
  * The return of this will be used for Unit Testing.
* `getUser` should simply send a status of 200 along with the request session's user object.

<details>

<summary> Detailed Instructions </summary>

<br />



</details>

### Solution

<details>

<summary> <code> server/controllers/auth_controller.js </code> </summary>

```js
const users = require('../models/users');
let id = 1;

module.exports = {
  login: ( req, res, next ) => {
    const { session } = req;
    const { username, password } = req.body;

    const user = users.find( user => user.username === username && user.password === password );

    if ( user ) {
      session.user.username = user.username;
      res.status(200).send(session.user);
    } else {
      res.status(500).send('Unauthorized.');
    }
  },

  register: ( req, res, next ) => {
    const { session } = req;
    const { username, password } = req.body;

    users.push({ id, username, password });
    id++;

    session.user.username = username;

    res.status(200).send( session.user );
  },

  signout: ( req, res, next ) => {
    const { session } = req;
    session.destroy();
    res.status(200).send( req.session );
  },

  getUser: ( req, res, next ) => {
    const { session } = req;
    res.status(200).send( session.user );
  }
};
```

</details>

## Step 7

### Summary

In this step, we'll require the auth controller in `server/index.js` and create endpoints to hit every method on the controller.

### Instructions

* Open `server/index.js`.
* Require the `auth_controller.js` file.
* Create the following endpoints: ( `request method`, `url`, `controller method` )
  * `POST` - `/api/login` - `auth_controller.login`.
  * `POST` - `/api/register` - `auth_controller.register`.
  * `POST` - `/api/signout` - `auth_controller.signout`.
  * `GET` - `/api/user` - `auth_controller.getUser`.
* Test your endpoints using postman.
  * Try registering a new user.
  * Try logging in with that user.
  * Try getting the session's information on the user ( /api/user ).
  * Try signing out ( This should return nothing if the session was destroyed ).

<details>

<summary> Detailed Instructions </summary>

<br />



</details>
  
### Solution

<details>

<summary> <code> server/index.js </code> </summary>

```js
const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');

// Middleware
const checkForSession = require('./middlewares/checkForSession');

// Controllers
const swag_controller = require('./controllers/swag_controller');
const auth_controller = require( './controllers/auth_controller');

const app = express();

app.use( bodyParser.json() );
app.use( session({
  secret: '@nyth!ng y0u w@nT',
  resave: false,
  saveUninitialized: false
}));
app.use( checkForSession );

// Swag
app.get( '/api/swag', swag_controller.read );

// Auth
app.post( '/api/login', auth_controller.login );
app.post( '/api/register', auth_controller.register );
app.post( '/api/signout', auth_controller.signout );
app.get( '/api/user', auth_controller.getUser );

const port = 3000;
app.listen( port, () => { console.log(`Server listening on port ${port}.`); } );
```

</details>

## Step 8

### Summary

In this step, we'll create a cart controller that can handle adding and deleting items from a user's cart. We'll also add a checkout method.

### Instructions

* Create a file called `cart_controller.js` in `server/controllers`.
* Require `swag` from `models/swag.js`.
  * This is just an array of swag objects.
* Export an object with an `add`, `delete`, and `checkout` method.
* Each method should capture `req`, `res`, and `next` as parameters.
* `add`:
  * Should check the request query for an `id`.
  * Should use the `id` to see if it is already in the user's cart on session.
    * If it is, just send a status 200 with the request session's user object.
    * If it isn't, find the swag object from `models/swag` using the `id` and add it to the cart on session.
      * Add the price of the swag to the total on the session.
      * Send a status 200 with the request session's user object.
* `remove`:
  * Should check the request query for an `id`.
  * Should use the `id` to remove the swag from cart and subtract it's price from the total.
  * Should send status 200 with the request session's user object.
* `checkout`:
  * Should set the cart back to an empty array on session.
  * Should set the total back to 0 on session.
  * Should send status 200 with the request session's user object.

<details>

<summary> Detailed Instructions </summary>

<br />



</details>

### Solution

<details>

<summary> <code> server/controllers/cart_controller.js </code> </summary>

```js
const swag = require('../models/swag');

module.exports = {
  add: ( req, res, next ) => {
    const { id } = req.query;
    let { cart } = req.session.user;

    const index = cart.findIndex( swag => swag.id == id );

    if ( index === -1 ) {
      const selectedSwag = swag.find( swag => swag.id == id );

      cart.push( selectedSwag );
      req.session.user.total += selectedSwag.price;
    }

    res.status(200).send( req.session.user );
  },

  delete: ( req, res, next ) => {
    const { id } = req.query;
    const { cart } = req.session.user;

    const selectedSwag = cart.find( swag => swag.id == id );
    const i = cart.findIndex( swag => swag.id == id );

    cart.splice(i, 1);
    req.session.user.total -= selectedSwag.price;
    
    res.status(200).send( req.session.user );
  },

  checkout: ( req, res, next ) => {
    const { user } = req.session;
    user.cart = [];
    user.total = 0;

    res.status(200).send( req.session.user );
  }
} 
```

</details>

## Step 9

### Summary

In this step, we'll import the cart controller and create endpoints to hit every method on the controller.

### Instructions



### Solution





