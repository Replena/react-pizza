import "./App.css";
import Home from "./components/Home.jsx";
import Success from "./components/Success.jsx";
import FormOrder from "./components/FormOrder.jsx";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    border: 1px solid black;
  }
`;

function App() {
  return (
    <>
      <GlobalStyle />
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
