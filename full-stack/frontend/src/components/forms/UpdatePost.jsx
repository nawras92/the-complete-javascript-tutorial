import { useState, useEffect } from "react";
import TextField from "@mui/material/TextField";
import Alert from "@mui/material/Alert";
import Button from "@mui/material/Button";
import validate from "../../utils/validation/post.js";
import requests from "../../api/posts/requests";

const UpdatePost = (props) => {
  const { postData } = props;
  const fetchedPost = postData || {};
  const [values, setValues] = useState({
    title: fetchedPost.title || "",
    body: fetchedPost.body || "",
  });
  const [errors, setErrors] = useState({});
  const [validationStatus, setValidationStatus] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [notification, setNotification] = useState({
    show: false,
    type: "error",
    text: "",
  });
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    //validation
    const title = values.title ? values.title.trim() : values.title;
    const body = values.body ? values.body.trim() : values.body;
    const validationErrors = validate(title, body);
    setErrors(validationErrors);
    if (Object.values(validationErrors).every((x) => x === "")) {
      setValidationStatus(true);
    } else {
      setValidationStatus(false);
    }
  };

  useEffect(() => {
    const sendPost = async (id, dataToSend) => {
      const results = await requests.updateOne(id, dataToSend);
      const { response, data } = results;
      console.log("response: ", response);
      console.log("data: ", data);
      if (response.ok) {
        setNotification({
          show: true,
          type: "success",
          text: "The post has been submitted successfully",
        });
      } else if (data) {
        const err = data.err || {};
        const errName = err.name || "";
        if (errName === "Validation Error") {
          setNotification({
            show: true,
            type: "error",
            text: err.message,
          });
        }
        console.log(data);
      } else {
        setNotification({
          show: true,
          type: "error",
          text: "Unknown Error",
        });
      }
    };
    try {
      if (submitted) {
        if (validationStatus) {
          sendPost(postData.id, values);
          setValidationStatus(false);
        }
        setSubmitted(false);
      }
    } catch (err) {
      console.log(err);
    }
  }, [submitted]);
  return (
    <form onSubmit={handleSubmit}>
      {notification.show && (
        <Alert severity={notification.type} variant="filled">
          {notification.text}
        </Alert>
      )}
      <TextField
        sx={{ my: 2 }}
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
