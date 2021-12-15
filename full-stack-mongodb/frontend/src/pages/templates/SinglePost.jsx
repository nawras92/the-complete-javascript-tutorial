import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import CircularProgress from "@mui/material/CircularProgress";
import { makeStyles } from "@mui/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import Sidebar from "../../parts/Sidebar";
import Post from "../../components/post/Post";
import requests from "../../api/posts/requests";

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

const SinglePost = (props) => {
  const { id } = useParams();
  const classes = useStyles(props);
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("sm"));
  const [post, setPost] = useState(undefined);

  useEffect(() => {
    const fetchPost = async (id) => {
      const data = await requests.getOne(id);
      const { post } = data;
      setPost(post);
    };
    fetchPost(id);
  }, [id]);
  return (
    <>
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
        <Grid item columnSpacing={1} xs={7} className={classes.main}>
          {post ? (
            <>
              <Post id={post._id} title={post.title} content={post.body} />
            </>
          ) : (
            <>
              <Typography variant="h5" component="p" gutterBottom>
                Post is loading
              </Typography>
              <CircularProgress size={100} />
            </>
          )}
        </Grid>
        <Grid item xs={4} className={classes.sidebar}>
          <Sidebar />
        </Grid>
      </Grid>
    </>
  );
};

export default SinglePost;
