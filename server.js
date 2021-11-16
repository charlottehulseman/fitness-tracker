const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const mongojs = require("mongojs");

const PORT = process.env.PORT || 3000;

const db = require("./models");
const { Workout, Exercise } = require("./models");
const app = express();

app.use(logger("dev"));
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", { useNewUrlParser: true });

const db = mongoose.connect(
    process.env.MONGODB_URI || "mongodb://localhost/fitnesstrackerDB",
    {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useFindAndModify: false,
      useCreateIndex: true,
    }
  );
  
  // connects routes
  app.use(router);
  require("./routes/html.js")(app);
  
  app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
  });
  
  module.exports = db;