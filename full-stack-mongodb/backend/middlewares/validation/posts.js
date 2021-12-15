const ObjectId = require("mongoose").Types.ObjectId;

const rules = {
  id: (req, res, next) => {
    const isValid = ObjectId.isValid(req.params.id);
    if (isValid) {
      next();
      return;
    } else {
      next({
        name: "Validation Error",
        element: "params: id",
        message: "The post id must be a valid objectid",
      });
      return;
    }
  },
  title: (req, res, next) => {
    if (req.body.title) {
      if (req.body.title.length < 7 || req.body.title.length > 70) {
        next({
          name: "Validation Error",
          element: "body: title",
          message: "The title length should be between 7 and 70 chars",
        });
        return;
      }
      next();
      return;
    }
    next();
    return;
  },
  body: (req, res, next) => {
    if (req.body.body) {
      if (req.body.body.length < 7 || req.body.body.length > 2000) {
        next({
          name: "Validation Error",
          element: "body: body",
          message: "The post body length should be between 7 and 2000 chars",
        });
        return;
      }
      next();
      return;
    }
    next();
    return;
  },
  titleRequired: (req, res, next) => {
    if (req.body.title) {
      next();
      return;
    }
    next({
      name: "Validation Error",
      element: "body: title",
      message: "The post title is required",
    });
    return;
  },
  bodyRequired: (req, res, next) => {
    if (req.body.body) {
      next();
      return;
    }
    next({
      name: "Validation Error",
      element: "body: body",
      message: "The post body is required",
    });
    return;
  },
  titleNotEmpty: (req, res, next) => {
    if (req.body.title === "") {
      next({
        name: "Validation Error",
        element: "body: title",
        message: "The post title cannot be empty",
      });
      return;
    }
    next();
    return;
  },
  bodyNotEmpty: (req, res, next) => {
    if (req.body.body === "") {
      next({
        name: "Validation Error",
        element: "body: body",
        message: "The post body cannot be empty",
      });
      return;
    }
    next();
    return;
  },
};
const validate = {
  getOne: [rules.id],
  addOne: [rules.titleRequired, rules.title, rules.bodyRequired, rules.body],
  updateOne: [
    rules.id,
    rules.titleNotEmpty,
    rules.title,
    rules.bodyNotEmpty,
    rules.body,
  ],
  deleteOne: [rules.id],
};

module.exports = validate;
