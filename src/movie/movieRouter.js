const { Router } = require("express")
const movieRouter = Router()
const { listMovie, addMovie, movieDeleteOne, movieEdit } = require("./movieController")

movieRouter.get("/user", listMovie)

movieRouter.post("/add", addMovie)

movieRouter.delete("/delete", movieDeleteOne)

movieRouter.put("/update", movieEdit)

module.exports = movieRouter;