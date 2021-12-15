import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import UpdatePostForm from "../../components/forms/UpdatePost";
import requests from "../../api/posts/requests";

const UpdatePost = () => {
  const { id } = useParams();
  const [post, setPost] = useState(undefined);

  useEffect(() => {
    const fetchPost = async (id) => {
      const data = await requests.getOne(id);
      const { post: fetchedPost } = data;
      setPost(fetchedPost);
    };
    fetchPost(id);
  }, [id]);
  return (
    <Paper sx={{ maxWidth: "80%", mx: "auto", p: 2 }}>
      <Typography variant="h4" component="h1">
        Update Post - {id}
      </Typography>
      <Typography variant="body1">Update the post below</Typography>
      <Divider sx={{ my: 3 }} />
      {post && <UpdatePostForm postData={post} />}
    </Paper>
  );
};

export default UpdatePost;
