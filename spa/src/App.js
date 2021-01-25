import "./App.css";
import Main from "./containers/Main/Main";
import { Route, Link, BrowserRouter as Router } from "react-router-dom";
import Events from "./containers/Events/Events";
import EventDetailsPage from "./containers/EventDetailsPage/EventDetailsPage";

function App() {
  return (
    <Router>
      <Route path="/admin" exact component={Main} />
      <Route path="/events" exact component={Events} />
      <Route path="/events/:id" exact component={EventDetailsPage} />
    </Router>
  );
}

export default App;
