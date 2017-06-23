const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');

// Controllers
const auth_controller = require( './controllers/auth_controller');
const swag_controller = require('./controllers/swag_controller');
const search_controller = require('./controllers/search_controller');
const cart_controller = require('./controllers/cart_controller');

// Middleware
const checkForSession = require('./middlewares/checkForSession');

// App
const app = express();

// Middleware
app.use( express.static( `${__dirname}/../public/build` ) );
app.use( bodyParser.json() );
app.use( session({
  secret: '@nyth!ng y0u w@nT',
  resave: false,
  saveUninitialized: false
}));
app.use( checkForSession );

// Auth
app.post( '/api/login', auth_controller.login );
app.post( '/api/register', auth_controller.register );
app.post( '/api/signout', auth_controller.signout );
app.get( '/api/user', auth_controller.getUser );

// Swag
app.get( '/api/swag', swag_controller.read );

// Search
app.get( '/api/search', search_controller.search );

// Cart
app.post( '/api/cart', cart_controller.add );
app.post( '/api/cart/checkout', cart_controller.checkout );
app.delete( '/api/cart', cart_controller.delete );

const port = 3000;
app.listen( port, () => { console.log(`Server listening on port ${port}.`); } );