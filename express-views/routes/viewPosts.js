const express = require("express");
const controller = require("../controllers/viewPosts");
// const validate = require("../middlewares/validation/posts");
// const sanitize = require("../middlewares/sanitization/posts");

const route = express.Router();

route.get("/", controller.getAll);
route.get("/:id", controller.getOne);
// route.get("/:id", validate.getOne, controller.getOne);
// route.delete("/:id", validate.deleteOne, controller.deleteOne);
// route.patch(
//   "/:id",
//   sanitize.updateOne,
//   validate.updateOne,
//   controller.updateOne
// );
// route.post("/", sanitize.addOne, validate.addOne, controller.addOne);

module.exports = route;
