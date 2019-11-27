const express = require('express');
const mongoose = require('mongoose');
const passport = require('passport');
// const cors = require('cors');

require('dotenv').config();

const app = express();



// Set up middleware
// app.use(cors);
app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(passport.initialize());
require("./config/passport")(passport);




// Read values from .env
port = process.env.PORT || 5000;
const uri = process.env.ATLAS_URI;

// Connect to database
mongoose.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => console.log('Database connection successful'))
    .catch(err => console.log('Database connection failed:' + err));


UserRouter = require("./routes/user.route");

app.use("/api/user", UserRouter);

app.listen(port, () => console.log('Server running on port ' + port));