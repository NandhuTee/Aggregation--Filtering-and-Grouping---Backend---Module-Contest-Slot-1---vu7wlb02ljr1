const express = require('express');
const app = express();
const aggregation = require('../routes/studentRoutes');

//middleware
app.use(express.json());

//User POST ROUTE
app.use('/api/aggregate', aggregation);

module.exports = app;
