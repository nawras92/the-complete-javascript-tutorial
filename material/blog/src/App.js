import Header from "./parts/Header";
import Home from "./pages/Home";
import SinglePage from "./pages/templates/SinglePage";
import SinglePost from "./pages/templates/SinglePost";
import AddPostPage from "./pages/forms/AddPost";
import UpdatePostPage from "./pages/forms/UpdatePost";
import { useState } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { green, brown } from "@mui/material/colors";
import Paper from "@mui/material/Paper";
import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const theme = createTheme({
    palette: {
      primary: {
        main: green[600],
      },
      secondary: {
        main: brown[500],
      },
      mode: darkMode ? "dark" : "light",
    },
  });
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <Paper sx={{ maxWidth: "90%", mx: "auto", my: "2rem", p: 2 }}>
          <Header checked={darkMode} onChange={() => setDarkMode(!darkMode)} />
          <Switch>
            <Route exact component={Home} path="/" />
            <Route
              exact
              render={(props) => (
                <SinglePage
                  title="helloooooooooo"
                  content="something in hereeeeeeeeeee"
                />
              )}
              path="/about"
            />
            <Route exact component={SinglePost} path="/post/:id" />
            <Route exact component={AddPostPage} path="/add-post" />
            <Route exact component={UpdatePostPage} path="/update-post/:id" />
          </Switch>
        </Paper>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
