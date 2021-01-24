import "./App.css";
import Main from "./containers/Main/Main";
import { Route, Link, BrowserRouter as Router } from "react-router-dom";
import Events from "./containers/Events/Events";

function App() {
  return (
    <Router>
      <Route path="/admin" exact component={Main} />
      <Route path="/events" exact component={Events} />
    </Router>
  );
}

export default App;
