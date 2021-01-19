import "./App.css";
import Main from "./containers/Main/Main";
import { Route, Link, BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
      <Route path="/admin" exact component={Main} />
      <Route path="/events" exact>
        <div>Events Here</div>
      </Route>
    </Router>
  );
}

export default App;
