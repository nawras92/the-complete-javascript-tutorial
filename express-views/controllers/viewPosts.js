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
  // addOne: (req, res) => {
  //   const post = {
  //     userId: 1,
  //     id: posts[posts.length - 1].id + 1,
  //     title: req.body.title,
  //     body: req.body.body,
  //   };
  //   posts.push(post);

  //   res.status(200).json({ message: "post is added" });
  // },

  // deleteOne: (req, res) => {
  //   const post = posts.find((post) => post.id === parseInt(req.params.id));
  //   if (post) {
  //     const index = posts.indexOf(post);
  //     posts.splice(index, 1);
  //     res.status(200).json({ message: "post is deleted" });
  //   } else {
  //     res.status(404).json({ message: "post not found" });
  //   }
  // },

  // updateOne: (req, res) => {
  //   const post = posts.find((post) => post.id === parseInt(req.params.id));
  //   if (post) {
  //     if (!req.body.title && !req.body.body) {
  //       res.status(200).json({ message: "you havent provided any value" });
  //     } else {
  //       post.title = req.body.title ? req.body.title : post.title;
  //       post.body = req.body.body ? req.body.body : post.body;

  //       res.status(200).json({ message: "post is updated" });
  //     }
  //   } else {
  //     res.status(404).json({ message: "post not found" });
  //   }
  // },
};

module.exports = controller;
