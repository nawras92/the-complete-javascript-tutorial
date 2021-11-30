const rules = {
  id: (req, res, next) => {
    const id = req.params.id;
    const pattern = /^[0-9]{1,3}$/;
    if (pattern.test(id)) {
      next();
    } else {
      next({
        name: "Validation Error",
        element: "params: id",
        message: "The post id must be a number from 1-999",
      });
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
      }
      next();
    }
    next();
  },
  body: (req, res, next) => {
    if (req.body.body) {
      if (req.body.body.length < 7 || req.body.body.length > 2000) {
        next({
          name: "Validation Error",
          element: "body: body",
          message: "The post body length should be between 7 and 2000 chars",
        });
      }
      next();
    }
    next();
  },
  titleRequired: (req, res, next) => {
    if (req.body.title) {
      next();
    }
    next({
      name: "Validation Error",
      element: "body: title",
      message: "The post title is required",
    });
  },
  bodyRequired: (req, res, next) => {
    if (req.body.body) {
      next();
    }
    next({
      name: "Validation Error",
      element: "body: body",
      message: "The post body is required",
    });
  },
  titleNotEmpty: (req, res, next) => {
    if (req.body.title === "") {
      next({
        name: "Validation Error",
        element: "body: title",
        message: "The post title cannot be empty",
      });
    }
    next();
  },
  bodyNotEmpty: (req, res, next) => {
    if (req.body.body === "") {
      next({
        name: "Validation Error",
        element: "body: body",
        message: "The post body cannot be empty",
      });
    }
    next();
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
