const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();
const routes = require('./Routes');

// Add path to routes file ./routes/api/...
// const items = require('')

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/public"));
}

// Add routes
app.use(routes);

//Bodyparser middleware
app.use(bodyParser.json());

// Connect to MongoDB
mongoose
    .connect(process.env.MONGODB_URI || "mongodb://localhost/getoutsiderva")
    .then(() => console.log('MongoDB Connected...'))
    .catch(err => console.log(err));

//Use routes /api/<filename>
// app.use('/api/', items)


const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${5000}`));

