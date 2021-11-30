const express = require("express");
const controller = require("../controllers/viewPosts");

const route = express.Router();

route.get("/", controller.getAll);
route.get("/add", controller.addOne);
route.post("/add", controller.addOne);
route.get("/update/:id", controller.updateOne);
route.post("/update/:id", controller.updateOne);
route.get("/:id", controller.getOne);

module.exports = route;
