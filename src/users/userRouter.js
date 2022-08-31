const { Router } = require("express")
const userRouter = Router()
const { listUsers, addUser, userDeleteOne, userEdit } = require("./userController")

userRouter.get("/user", listUsers)

userRouter.post("/user", addUser)

userRouter.delete("/user", userDeleteOne)

userRouter.put("/user", userEdit)

module.exports = userRouter;