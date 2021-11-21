import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import AppsIcon from "@mui/icons-material/Apps";
import MuiLink from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import { Link } from "react-router-dom";
import { makeStyles } from "@mui/styles";
import Switch from "../components/shared/Switch";

const useStyles = makeStyles({
  link: {
    marginRight: "1rem",
    marginTop: "0.4rem",
  },
});

const Header = (props) => {
  const classes = useStyles(props);
  const { checked, onChange } = props;
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <>
      <AppBar color="secondary">
        <Toolbar>
          <Grid
            container
            direction={matches ? "column" : "row"}
            justifyContent={matches ? "center" : "space-around"}
            alignItems="center"
          >
            <Grid item container xs="auto">
              <Grid item>
                <IconButton color="inherit">
                  <AppsIcon />
                </IconButton>
              </Grid>
              <Grid item>
                <Typography variant="body1" component="h1" sx={{ mt: 1 }}>
                  LWN Blog
                </Typography>
              </Grid>
            </Grid>
            <Grid item container xs="auto">
              <Grid item className={classes.link}>
                <MuiLink
                  color="inherit"
                  component={Link}
                  to="/"
                  variant="button"
                  underline="none"
                >
                  Home
                </MuiLink>
              </Grid>
              <Grid item className={classes.link}>
                <MuiLink
                  color="inherit"
                  component={Link}
                  to="/add-post"
                  variant="button"
                  underline="none"
                >
                  Add Post
                </MuiLink>
              </Grid>
              <Grid item className={classes.link}>
                <MuiLink
                  color="inherit"
                  component={Link}
                  to="/about"
                  variant="button"
                  underline="none"
                >
                  About
                </MuiLink>
              </Grid>
              <Grid item>
                <Switch checked={checked} onChange={onChange} />
              </Grid>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
      <Toolbar />
    </>
  );
};

export default Header;
