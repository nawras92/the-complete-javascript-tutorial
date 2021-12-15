import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import AddPostForm from "../../components/forms/AddPost";
const AddPost = () => {
  return (
    <Paper sx={{ maxWidth: "80%", mx: "auto", p: 2 }}>
      <Typography variant="h4" component="h1">
        Add Post
      </Typography>
      <Typography variant="body1">
        Add your new post using the form below
      </Typography>
      <Divider sx={{ my: 3 }} />
      <AddPostForm />
    </Paper>
  );
};

export default AddPost;
