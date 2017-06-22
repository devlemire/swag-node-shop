const users = require('../models/users');
let id = 1;

module.exports = {
  login: ( req, res, next ) => {
    const { session } = req;
    const { username, password } = req.body;

    const user = users.find( user => user.username === username && user.password === password );

    if ( user ) {
      const cart = session.user.cart;
      session.user = {
        username: user.username,
        cart: cart
      };

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

    const cart = session.user.cart;
    session.user = {
      username,
      cart
    };

    res.status(200).send( session.user );
  },

  signout: ( req, res, next ) => {
    const { session } = req;
    session.destroy();
    res.status(200).send('Signing out..');
  },

  getUser: ( req, res, next ) => {
    const { session } = req;
    res.status(200).send( session.user );
  }
};