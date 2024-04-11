const express = require("express");
const AuthRoute = express.Router();
const {login, getLoginUsers, UserbyName, UpdateUser} = require("../controller/AuthController.js")

AuthRoute.post("/login", login)
AuthRoute.get("/loginUsers", getLoginUsers)
AuthRoute.get("/loginUsers/:email", UserbyName)
AuthRoute.patch("/UpdateUser/:id", UpdateUser)

module.exports = AuthRoute