const posts = require("../models/data2");
const queries = require("../models/queries/post");

const controller = {
  getAll: (req, res, next) => {
    const itemsPerPage = 10;
    const requestedPage = req.query.page || 1;
    const skip = requestedPage * itemsPerPage - itemsPerPage;
    queries.getAll(itemsPerPage, skip, (err, posts) => {
      if (err) next(err);
      if (posts) {
        queries.count((err, postsCount) => {
          const pagesCount = Math.ceil(postsCount / itemsPerPage);
          res.status(200);
          res.json({ posts: posts, pagesCount: pagesCount });
        });
      } else {
        res.status(200);
        res.json({ message: "no posts added yet" });
      }
    });
  },
  getOne: (req, res, next) => {
    queries.getOne(req.params.id, (err, post) => {
      if (err) next(err);
      post
        ? res.status(200).json({ post: post })
        : res.status(404).json({ message: "post not found" });
    });
  },
  addOne: (req, res, next) => {
    const post = {
      title: req.body.title,
      body: req.body.body,
    };
    queries.addOne(post, (err, post) => {
      if (err) next(err);
      if (post) res.status(200).json({ message: "post is added" });
    });
  },

  deleteOne: (req, res) => {
    queries.deleteOne(req.params.id, (err, post) => {
      if (err) next(err);
      post
        ? res.status(200).json({ message: "post is deleted" })
        : res.status(404).json({ message: "post not found" });
    });
  },

  updateOne: (req, res, next) => {
    const update = {
      title: req.body.title,
      body: req.body.body,
    };
    queries.updateOne(req.params.id, update, (err, post) => {
      if (err) next(err);
      if (post) {
        res.status(200);
        res.json({ message: "post is updated" });
      } else {
        res.status(404);
        res.json({ message: "post not found" });
      }
    });
  },
};

module.exports = controller;
