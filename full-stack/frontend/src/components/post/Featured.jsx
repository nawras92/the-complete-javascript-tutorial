import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  root: {
    margin: "3rem auto",
    padding: "1rem",
    maxWidth: "70%",
    background: "#555",
    color: "#fff",
    borderRadius: "1rem",
  },
});

const FeaturedPost = (props) => {
  const classes = useStyles(props);
  const { id, title, content } = props;
  return (
    <>
      <Grid container className={classes.root} columnSpacing={2}>
        <Grid item xs={12} md={4}>
          <Typography variant="h6" component="h3" gutterBottom>
            {title}
          </Typography>
        </Grid>
        <Grid item xs={12} md={8}>
          <Typography variant="body1" component="p">
            {content}
          </Typography>
          <Button variant="contained">Read More </Button>
        </Grid>
      </Grid>
    </>
  );
};

export default FeaturedPost;
