import { BrowserRouter, Switch, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import InspirationsPage from "./pages/InspirationsPage/InspirationsPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/inspirations" component={InspirationsPage} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
