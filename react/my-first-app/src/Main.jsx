import { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import Notification from "./Notification";
import Button from "./Button";
import Posts from "./Posts";
import Home from "./Home";

const Main = () => {
  const handleClick = (e) => {
    e.preventDefault();
    setShown(!shown);
  };
  const [shown, setShown] = useState(false);
  const title = shown ? "Hide" : "Show";

  useEffect(() => {
    console.log("Main: shown changed");
    return;
  });
  return (
    <main className="main">
      <Button title={title} onClick={handleClick} />
      {shown && <Notification text="this is a new notification" />}

      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/blog" component={Posts} />
      </Switch>
    </main>
  );
};

export default Main;
