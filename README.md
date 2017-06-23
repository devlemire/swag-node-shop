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


