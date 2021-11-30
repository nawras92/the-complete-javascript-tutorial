const express = require("express");
const livereload = require("livereload");
const connectLivereload = require("connect-livereload");
const { engine } = require("express-handlebars");
const postsRouter = require("./routes/posts");
const viewPostsRouter = require("./routes/viewPosts");
const path = require("path");
const PORT = 8000;

const app = express();
//livereload configuration start
const liveReloadServer = livereload.createServer();
liveReloadServer.server.once("connection", () => {
  setTimeout(() => {
    liveReloadServer.refresh("/");
  }, 100);
});
//livereload configuration end
app.use(connectLivereload());
app.use(express.json());
app.use("/", express.static(path.join(__dirname, "public")));

// setup views
app.set("views", path.join(__dirname, "views"));
app.engine(
  "hbs",
  engine({
    extname: "hbs",
    defaultLayout: "main",
    layoutsDir: path.join(__dirname, "views", "layouts"),
    partialDir: path.join(__dirname, "views", "partials"),
  })
);
app.set("view engine", "hbs");

app.get("/myblog", (req, res) => {
  res.status(200);
  res.render("index");
});
app.get("/myblog2", (req, res) => {
  res.status(200);
  res.render("index2");
});

app.use("/view", viewPostsRouter);
app.use("/posts", postsRouter);

const errMiddleware = (err, req, res, next) => {
  res.status(400).json({ err: err });
};
app.use(errMiddleware);

app.listen(PORT, () => {
  console.log(`This app runs on port ${PORT}`);
});
