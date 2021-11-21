const posts = require("../models/data");

const controller = {
  getAll: (req, res, next) => {
    const itemsPerPage = 10;
    const requestedPage = req.query.page - 1 || 0;
    const startIndex = requestedPage * itemsPerPage;
    const endIndex = itemsPerPage + startIndex;
    const paginatedPosts = posts.filter(
      (post, index) => index >= startIndex && index < endIndex
    );
    res.status(200).json({ posts: paginatedPosts });
  },
  getOne: (req, res) => {
    const post = posts.find((post) => post.id === parseInt(req.params.id));
    if (post) {
      res.status(200).json({ post: post });
    } else {
      res.status(404).json({ message: "post not found" });
    }
  },
  addOne: (req, res) => {
    const post = {
      userId: 1,
      id: posts[posts.length - 1].id + 1,
      title: req.body.title,
      body: req.body.body,
    };
    posts.push(post);

    res.status(200).json({ message: "post is added" });
  },

  deleteOne: (req, res) => {
    const post = posts.find((post) => post.id === parseInt(req.params.id));
    if (post) {
      const index = posts.indexOf(post);
      posts.splice(index, 1);
      res.status(200).json({ message: "post is deleted" });
    } else {
      res.status(404).json({ message: "post not found" });
    }
  },

  updateOne: (req, res) => {
    const post = posts.find((post) => post.id === parseInt(req.params.id));
    if (post) {
      if (!req.body.title && !req.body.body) {
        res.status(200).json({ message: "you havent provided any value" });
      } else {
        post.title = req.body.title ? req.body.title : post.title;
        post.body = req.body.body ? req.body.body : post.body;

        res.status(200).json({ message: "post is updated" });
      }
    } else {
      res.status(404).json({ message: "post not found" });
    }
  },
};

module.exports = controller;
