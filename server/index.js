const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(path.join(__dirname, '../client')));
app.use(express.static(path.join(__dirname, '../client/images')));

app.get('/')

app.listen(process.env.PORT || 3000);