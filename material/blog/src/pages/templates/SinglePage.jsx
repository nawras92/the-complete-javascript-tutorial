import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const SinglePage = (props) => {
  const { title, content } = props;
  return (
    <Box>
      <Typography variant="h4" component="h1" gutterBottom>
        {title}
      </Typography>
      <Typography variant="body1" gutterBottom>
        {content}
      </Typography>
    </Box>
  );
};

export default SinglePage;
