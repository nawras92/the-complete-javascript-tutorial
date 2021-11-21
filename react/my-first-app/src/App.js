import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import Header from "./Header";
import Footer from "./Footer";
import Main from "./Main";

function App() {
  return (
    <>
      <Router>
        <Header title="Learn React" text="React made easy with me" />
        <Main />
        <Footer />
      </Router>
    </>
  );
}

export default App;
