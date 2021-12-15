const Post = require("../schemas/post");

const queries = {
  count: (handler) => {
    Post.countDocuments({}, (err, count) => {
      if (err) handler(err);
      handler(null, count);
    });
  },
  getAll: (limit, skip, handler) => {
    Post.find({})
      .skip(skip)
      .limit(limit)
      .exec((err, posts) => {
        if (err) handler(err);
        handler(null, posts);
      });
  },
  getOne: (id, handler) => {
    Post.findOne({ _id: id }, (err, post) => {
      err ? handler(err) : handler(null, post);
    });
  },
  deleteOne: (id, handler) => {
    Post.findOneAndDelete({ _id: id }, (err, post) => {
      err ? handler(err) : handler(null, post);
    });
  },
  updateOne: (id, update, handler) => {
    Post.findOneAndUpdate({ _id: id }, update, (err, post) => {
      err ? handler(err) : handler(null, post);
    });
  },
  addOne: (post, handler) => {
    const newPost = new Post(post);
    newPost.save((err) => {
      err ? handler(err) : handler(null, post);
    });
  },
};

module.exports = queries;
