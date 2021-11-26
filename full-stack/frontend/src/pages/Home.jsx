import { useState, useEffect } from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import CircularProgress from "@mui/material/CircularProgress";
import Pagination from "@mui/material/Pagination";
import { makeStyles } from "@mui/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import Post from "../components/post/Post";
import Sidebar from "../parts/Sidebar";
import requests from "../api/posts/requests";

const useStyles = makeStyles({
  root: {
    maxWidth: "90%",
  },

  rootnotsm: {
    margin: "1rem auto",
  },

  rootsm: {
    margin: "3rem auto",
    maxWidth: "100%",
  },

  main: {
    padding: "1rem",
  },

  sidebar: {
    padding: "1rem",
  },
});

const Home = (props) => {
  const classes = useStyles(props);
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("sm"));
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(1);
  const [noOfPages, setNoOfPages] = useState(1);
  useEffect(() => {
    const fetchPosts = async (page) => {
      const data = await requests.getAll(page);
      const { posts, pagesCount } = data;
      setNoOfPages(pagesCount);
      setPosts(posts);
    };
    fetchPosts(page);
  }, [page]);
  return (
    <>
      <Post
        featured
        id={0}
        title="this is a featured post"
        content="this is a content"
      />
      <Grid
        container
        direction={matches ? "column" : "row"}
        className={
          matches
            ? `${classes.root} ${classes.rootsm}`
            : `${classes.root} ${classes.rootnotsm}`
        }
        justifyContent="space-between"
      >
        <Grid
          container
          item
          columnSpacing={1}
          xs={7}
          className={classes.main}
          justifyContent="center"
        >
          <Grid item xs={12}>
            <Typography component="h3" variant="h4" gutterBottom>
              Blog Posts
            </Typography>
          </Grid>
          {posts && posts.length > 0 ? (
            posts.map((post, index) => {
              return (
                <Grid item md={6} key={index}>
                  <Post
                    snippet
                    id={post.id}
                    title={post.title}
                    content={post.body}
                  />
                </Grid>
              );
            })
          ) : (
            <CircularProgress size={120} />
          )}
          <Grid item xs={12}>
            <Pagination
              color="primary"
              count={noOfPages}
              shape="rounded"
              size="large"
              onChange={(e, value) => setPage(value)}
            />
          </Grid>
        </Grid>
        <Grid item xs={4} className={classes.sidebar}>
          <Sidebar />
        </Grid>
      </Grid>
    </>
  );
};

export default Home;
