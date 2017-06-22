const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');

// Controllers
const ac = require( './controllers/auth_controller');
const swagc = require('./controllers/swag_controller');
const searchc = require('./controllers/search_controller');
const cc = require('./controllers/cart_controller');

// Middleware
const checkForSession = require('./middlewares/checkForSession');

// App
const app = express();

// Middleware
app.use( express.static( `${__dirname}/../public/build` ) );
app.use( bodyParser.json() );
app.use( session({
  secret: 'sdfslg234WER@#$@$',
  resave: false,
  saveUninitialized: false
}));
app.use( ( req, res, next ) => checkForSession( req, res, next ) );

// Auth
app.post( '/api/login', ac.login );
app.post( '/api/register', ac.register );
app.post( '/api/signout', ac.signout );
app.get( '/api/user', ac.getUser );

// Swag
app.get( '/api/swag', swagc.read );

// Search
app.get( '/api/search', searchc.search );

// Cart
app.post( '/api/cart', cc.add );
app.post( '/api/cart/checkout', cc.checkout );
app.delete( '/api/cart', cc.delete );

const port = 3000;
app.listen( port, () => { console.log(`Server listening on port ${port}.`); } );