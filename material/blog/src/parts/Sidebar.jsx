import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import MenuList from "@mui/material/MenuList";
import MenuItem from "@mui/material/MenuItem";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  card: {
    marginBottom: "1rem",
  },
});
const Sidebar = (props) => {
  const classes = useStyles(props);
  return (
    <>
      <Card raised className={classes.card}>
        <CardContent>
          <Typography component="h3" variant="h6">
            About
          </Typography>
          <Typography>
            Lorem ducimus consectetur nemo quaerat omnis cupiditate sunt Quia
            cupiditate consectetur nobis incidunt molestias Ducimus.
          </Typography>
        </CardContent>
      </Card>
      <Card raised className={classes.card}>
        <CardContent>
          <Typography component="h3" variant="h6">
            Categories
          </Typography>
          <MenuList>
            <MenuItem>CSS</MenuItem>
            <MenuItem>HTML</MenuItem>
            <MenuItem>React</MenuItem>
            <MenuItem>Node</MenuItem>
          </MenuList>
        </CardContent>
      </Card>
    </>
  );
};

export default Sidebar;
