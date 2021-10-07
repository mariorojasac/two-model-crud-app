const express = require('express')
const mongoose = require('mongoose')
const morgan = require('morgan')
const methodOverride = require('method-override')
const PORT = process.env.PORT || 3000
const indexController = require("./controllers/index.js");
const authorsController = require("./controllers/authors");


const app = express()
require("dotenv").config();
const DATABASE_URL = process.env.DATABASE_URL;
mongoose.connect(DATABASE_URL);
const db = mongoose.connection;
db.on("connected", () => console.log("Connected to MongoDB"));
db.on("error", (error) => console.log("MongoDB Error " + error.message));


app.use(express.static("public"));
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: false }));
app.use(methodOverride('_method'))


// Routes
app.use('/', indexController)
app.use('/', authorsController)



app.listen(PORT)