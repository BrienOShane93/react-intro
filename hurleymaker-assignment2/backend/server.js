const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const path = require('path');

const routes = require('./routes');
const HttpError = require('./utils/http-error');

const app = express();

app.use(bodyParser.json());

app.use(express.static(path.join('public')));

app.use((request, response, next) => {
  response.setHeader('Access-Control-Allow-Origin', '*');
  response.setHeader(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, Authorization'
  );
  response.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, PUT, DELETE');
  next();
});

app.use('/api', routes); 

app.use((request, response, next) => {
  response.sendFile(path.resolve(__dirname, 'public', 'index.html'));
});

app.use((request, response, next) => {
    const error = new HttpError('Could not find this route.', 404);
    throw error;
});

app.use((error, request, response, next) => {
  if (response.headerSent) {
    return next(error);
  }
  response.status(error.code || 500)
  response.json({message: error.message || 'An unknown error occurred!'});
});

mongoose
.connect(
  `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@hurleymaker.edfuy.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`
  )  
  .then(() => {
    app.listen(process.env.PORT || 5000);
  })
  .catch(err => {
    console.log(err);
  });