const express = require("express");
const postsRouter = require("./routes/posts");
const path = require("path");
const PORT = 8000;

const app = express();
app.use(express.json());
app.use("/", express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.send("welcome to our blog");
});

app.get("/myblog", (req, res, next) => {
  const file = path.join(__dirname, "public", "index.html");
  res.sendFile(file);
});
app.use("/posts", postsRouter);

const errMiddleware = (err, req, res, next) => {
  res.status(400).json({ err: err });
};
app.use(errMiddleware);

app.listen(PORT, () => {
  console.log(`This app runs on port ${PORT}`);
});
