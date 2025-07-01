const express = require('express');
const badgesRoutes = require('./routes/badges');
const walletsRoutes = require('./routes/wallets');

const app = express();

app.use(express.json());

app.use('/badges', badgesRoutes);
app.use('/wallets', walletsRoutes);

module.exports = app;