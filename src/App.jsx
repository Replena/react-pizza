import "./App.css";
import Home from "./components/Home.jsx";
import Success from "./components/Success.jsx";
import FormOrder from "./components/FormOrder.jsx";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  useLocation,
} from "react-router-dom";
import Header from "./components/Header.jsx";
import HeaderNav from "./components/Header-Nav.jsx";

function App() {
  const imgLocation = useLocation();
  return (
    <>
      <Header />
      <HeaderNav location={location} />
      <Switch>
        <Route path="/" exact component={FormOrder} />
        <Route path="/order" component={FormOrder} />
        <Route path="/home" component={Home} />
        <Route path="/success" component={Success} />
      </Switch>
    </>
  );
}

export default App;
