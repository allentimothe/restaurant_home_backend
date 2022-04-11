// require our modules
const express = require('express');
const morgan = require('morgan');


//require cors module
const cors = require('cors');

// initiate the express app
const app = express();
require('dotenv').config();
// configure settings app.set()
//require and configure our dotenv module
require('./config/database');
//require our database config file



// mount middleware with app.use()
app.use(morgan('dev'));
app.use(express.json()); //converts incoming json into req.body
app.use(cors());
// mount our route with app.use()
app.use('/api/clockins', require('./routes/api/clockins'));
// tell the app listen to port 3001

const port = process.env.port || 3001;

app.listen(port, function () {
  console.log(`Express is listening for AJAX request on port ${port}`);
});