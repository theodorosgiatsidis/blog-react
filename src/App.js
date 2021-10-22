import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import TopBar from "./Components/TopBar/TopBar";
import Home from "./Pages/Home/Home";
import Settings from "./Pages/Settings/Settings";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";
import Write from "./Pages/Write/Write";
import ToDo from "./Components/ToDo/ToDo";

function App() {
  return (
    <Router>
      <TopBar />
      <Switch />
      <Route exact path="/">
        {/* <Home /> */}
        <Home />
      </Route>
      <Route path="/login">
        <Login />
      </Route>
      <Route path="/register">
        <Register />
      </Route>
      <Route path="/settings">
        <Settings />
      </Route>
      <Route path="/write">
        <Write />
      </Route>
    </Router>
  );
}

export default App;
