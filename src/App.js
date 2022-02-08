import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./routes/Home";
import Detail from "./routes/Detail";
import Nav from "./components/Nav";
function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Nav />
      <Switch>
        {/* <Route path="/page/:num">
          <Foot />
        </Route> */}
        <Route path="/movie/:id">
          <Detail />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
