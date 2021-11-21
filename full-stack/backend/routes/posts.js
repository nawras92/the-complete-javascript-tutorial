const express = require("express");
const controller = require("../controllers/posts");
const validate = require("../middlewares/validation/posts");

const route = express.Router();

route.get("/", controller.getAll);
route.get("/:id", validate.getOne, controller.getOne);
route.delete("/:id", validate.deleteOne, controller.deleteOne);
route.patch("/:id", validate.updateOne, controller.updateOne);
route.post("/", validate.addOne, controller.addOne);

module.exports = route;
