import "./App.css";
import Home from "./components/Home.jsx";
import Success from "./components/Success.jsx";
import FormOrder from "./components/FormOrder.jsx";
import Footer from "./components/Footer.jsx";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  useLocation,
} from "react-router-dom";
import Header from "./components/Header.jsx";
import HeaderNav from "./components/Header-Nav.jsx";
import { useState } from "react";

function App() {
  const [orderData, setOrderData] = useState({
    pizzaName: "",
    name: "",
    quantity: "",
    size: "",
    side: "",
    ingredients: [],
    total: "",
    note: "",
    delivery: "",
  });

  const locationImg = useLocation();
  const orderpath = locationImg.pathname === "/order";
  return (
    <>
      <Header />
      {orderpath && (
        <div style={{ maxWidth: "100%" }}>
          {" "}
          <img
            src=" ../Assets/Iteration-2-aseets/pictures/form-banner.png"
            alt="pizza"
            className="pizza-img"
            style={{ maxWidth: "100%", objectFit: "contain" }}
          />
        </div>
      )}
      <HeaderNav location={location} />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route
          path="/order"
          render={() => <FormOrder setOrderData={setOrderData} />}
        />
        <Route path="/home" component={Home} />
        <Route
          path="/success"
          render={() => <Success orderData={orderData} />}
        />
      </Switch>
      <Footer />
    </>
  );
}

export default App;
