const { Router } = require("express")
const movieRouter = Router()
const { listMovie, addMovie, movieDeleteOne, movieEdit } = require("./movieController")

movieRouter.get("/movie", listMovie)

movieRouter.post("/movie", addMovie)

movieRouter.delete("/movie", movieDeleteOne)

movieRouter.put("/movie", movieEdit)




module.exports = movieRouter;