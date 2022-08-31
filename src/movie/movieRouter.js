const { Router } = require("express")
const movieRouter = Router()
const { listMovie, addMovie, movieDeleteOne, movieEdit } = require("./movieController")

movieRouter.get("/user", listMovie)

movieRouter.post("/user", addMovie)

movieRouter.delete("/user", movieDeleteOne)

movieRouter.put("/user", movieEdit)

module.exports = movieRouter;