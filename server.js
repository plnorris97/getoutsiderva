const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();
const routes = require('./Routes');
const mongojs = require('mongojs');

// Add path to routes file ./routes/api/...
// const items = require('')

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/public"));
}

// Database configuration
// const databaseUrl = "getoutsiderva";
// const collections = ["activities", "destinations"];

// // Hook mongojs config to db variables
// const db = mongojs(databaseUrl, collections);

// db.on("error", function(error) {
//   console.log("Database error:", error);
// })

// Add routes
app.use(routes);

//Bodyparser middleware
// app.use(bodyParser.json());

// Connect to MongoDB
mongoose
    .connect(process.env.MONGODB_URI || "mongodb://localhost/getoutsiderva")
    .then(() => console.log('MongoDB Connected...'))
    .catch(err => console.log(err));

//Use routes /api/<filename>
// app.use('/api/', items)


const port = process.env.PORT || 3001;

app.listen(port, () => console.log(`Server started on port ${port}`));

