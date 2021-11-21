import { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import validate from "../../utils/validation/post.js";

const UpdatePost = (props) => {
  const { postData } = props;
  const fetchedPost = postData || {};
  const [values, setValues] = useState({
    title: fetchedPost.title || "",
    body: fetchedPost.body || "",
  });
  const [errors, setErrors] = useState({});
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    //validation
    const title = values.title ? values.title.trim() : values.title;
    const body = values.body ? values.body.trim() : values.body;
    const validationErrors = validate(title, body);
    setErrors(validationErrors);
    // send values to back end
    // calling the api
  };
  return (
    <form onSubmit={handleSubmit}>
      <TextField
        sx={{ mb: 2 }}
        label="Post Title"
        name="title"
        value={values.title}
        onChange={handleInputChange}
        error={!!errors.title}
        helperText={errors.title && errors.title}
        fullWidth
      />
      <TextField
        sx={{ mb: 2 }}
        label="Post Content"
        multiline
        rows={6}
        name="body"
        value={values.body}
        onChange={handleInputChange}
        error={!!errors.body}
        helperText={errors.body && errors.body}
        fullWidth
      />
      <Button fullWidth variant="contained" type="submit">
        Submit
      </Button>
    </form>
  );
};

export default UpdatePost;
