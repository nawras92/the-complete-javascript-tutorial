const posts = require("../models/data2");

const controller = {
  getAll: (req, res, next) => {
    res.status(200);
    res.render("index", { posts: posts });
  },
  getOne: (req, res) => {
    const post = posts.find((post) => post.id === parseInt(req.params.id));
    if (post) {
      res.status(200);
      res.render("single", { post: post });
    } else {
      res.status(404);
      res.render("404");
    }
  },
  addOne: (req, res) => {
    res.status(200);
    res.render("add");
  },
  updateOne: (req, res) => {
    const post = posts.find((post) => post.id === parseInt(req.params.id));
    if (post) {
      res.status(200);
      res.render("update", { post: post });
    } else {
      res.status(404);
      res.render("404");
    }
  },
};

module.exports = controller;
