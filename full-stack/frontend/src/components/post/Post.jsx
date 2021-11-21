import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { makeStyles } from "@mui/styles";
import MuiLink from "@mui/material/Link";
import { Link } from "react-router-dom";
import FeaturedPost from "./Featured";
import Controls from "./Controls";

const useStyles = makeStyles({
  root: {
    marginBottom: "1rem",
    textAlign: "center",
  },
});

const Post = (props) => {
  const classes = useStyles(props);
  const { id, title, content, featured, snippet } = props;
  return (
    <>
      {featured && <FeaturedPost id={id} title={title} content={content} />}
      {!featured && (
        <Card raised className={classes.root}>
          <Controls postID={id} />
          <CardContent>
            <Typography variant="h6" component="h3" gutterBottom>
              {snippet ? title.slice(0, 15) : title}
            </Typography>
            <Typography variant="body1" component="p">
              {snippet ? content.slice(0, 70) : content}
            </Typography>
          </CardContent>
          {snippet && (
            <CardActions>
              <Button variant="contained" fullWidth>
                <MuiLink
                  color="inherit"
                  component={Link}
                  to={`/post/${id}`}
                  variant="button"
                  underline="none"
                >
                  Read More
                </MuiLink>
              </Button>
            </CardActions>
          )}
        </Card>
      )}
    </>
  );
};

export default Post;
