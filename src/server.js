const mongoose = require("mongoose");
const express = require("express");
const Movies = require("./movie/movieModel");
const app = express();
const port = process.env.PORT || 5000
const movieRouter = require("./movie/movieRouter")
require("./db/connnections");

app.use(express.json())
app.use(movieRouter)


app.listen(port, () =>
{
  console.log(`listening on port ${port}`)
})