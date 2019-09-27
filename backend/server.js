const express = require('express');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();

// Set up middleware
app.use(express.urlencoded({extended: false}));
app.use(express.json());

// Read values from .env
port = process.env.PORT || 5000;
const uri = process.env.ATLAS_URI;

// Connect to database
mongoose.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => console.log('Database connection successful'))
    .catch(err => console.log('Database connection failed:' + err));

app.listen(port, () => console.log('Server running on port ' + port));