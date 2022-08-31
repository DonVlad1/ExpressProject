const { Router } = require("express")
const movieRouter = Router()
const { listMovie, addMovie } = require("./movieController")

movieRouter.get("/user", listMovie)

movieRouter.post("/user", addMovie)

module.exports = movieRouter;