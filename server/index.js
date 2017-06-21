const express = require('express');
const bodyParser = require('bodyParser');
const session = require('session');

const app = express();

app.use( express.static( `${__dirname}/../public/build` ) );

const port = 3000;
app.listen( port, () => { console.log(`Server listening on port ${port}.`); } );