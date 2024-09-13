import React from "react";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import { useHistory } from "react-router-dom";
import {
  Button,
  Card,
  CardBody,
  CardImg,
  CardImgOverlay,
  CardText,
  CardTitle,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";
import "./Home.css";

const menu1 = [
  "YENİ! Kore",
  "Pizza",
  "Burger",
  "Kızartmalar",
  "Fast Food",
  "Gazlı İçecek",
];

const cards = [
  {
    cardTitle: "Özel Lezzetus",
    product: "Position:Absolute Acı Burger",
    button: "",
  },
  {
    cardTitle: "Hackatlon Burger Menu",
    button: "",
  },
  {
    red: `Çoooook\u00A0`,
    cardTitle: "hızlı npm gibi kurye",
    button: "",
  },
];

const menu2 = [
  "Ramen",
  "Pizza",
  "Burger",
  "French Fries",
  "Fast Food",
  "Soft Drinks",
];

const products = [
  {
    name: "Terminal Pizza",
    price: "60₺",
    size: "4.9",
    gram: "(200)",
  },
  {
    name: "Position Absolute Acı Pizza",
    price: "60₺",
    size: "4.9",
    gram: "(200)",
  },
  {
    name: "useEffect Tavuklu Burger",
    price: "60₺",
    size: "4.9",
    gram: "(200)",
  },
];

function Home() {
  const history = useHistory();

  return (
    <div className="bej">
      <div className="home-div">
        <p className="top-title">fırsatı kaçırma</p>
        <h1 className="title">
          KOD ACIKTIRIR <br /> PİZZA DOYURUR
        </h1>
        <Link to="/order" className="main-button">
          ACIKTIM
        </Link>
      </div>
      <div className="w-100 m-auto">
        <div className="white">
          <section className="menu-nav d-flex justify-content-between p-3 w-50 m-auto">
            {menu1.map((item, i) => (
              <Nav key={i}>
                <NavItem className="w-100 d-flex item-6 white-border">
                  <img
                    src={`Assets/Iteration-2-aseets/icons/${i + 1}.svg`}
                    alt={`Icon ${i + 1}`}
                  />
                  <NavLink className="black p-1 my-auto">
                    <span className="black">{item}</span>
                  </NavLink>
                </NavItem>
              </Nav>
            ))}
          </section>
        </div>
        <section className="d-flex justify-content-center gap-2 w-50 m-auto">
          <div>
            <Card fluid>
              <CardImg
                src={`../../Assets/Iteration-2-aseets/cta/kart-1.png`}
                alt="Card Image 1"
              />
              <CardImgOverlay className="p-4 w-75">
                <h3 className="menu-card-text">{cards[0].cardTitle}</h3>
                <CardText className="white-text">{cards[0].product}</CardText>
                <a className="menu-card-button">
                  {cards[0].button} SİPARİŞ VER
                </a>
              </CardImgOverlay>
            </Card>
          </div>

          <div className="d-flex flex-column justify-content-between w-75">
            {cards.slice(1).map((card, i) => (
              <Card key={i + 1}>
                <CardImg
                  src={`../../Assets/Iteration-2-aseets/cta/kart-${i + 2}.png`}
                  alt={`Card Image ${i + 2}`}
                />
                <CardImgOverlay>
                  <div className="d-flex h-75 w-75 menu-card-secondary">
                    <p className="text-danger">{card.red}</p>
                    <CardTitle>{card.cardTitle}</CardTitle>
                  </div>
                  <a className="menu-card-button">{card.button} SİPARİŞ VER</a>
                </CardImgOverlay>
              </Card>
            ))}
          </div>
        </section>
        <div className="text-center w-50 m-auto">
          <p className="satisfy text-danger fs-3 mt-5 w-50 m-auto">
            en çok paketlenen menüler
          </p>
          <p className="fw-bold fs-2">Acıktıran Kodlara Doyuran Lezzetler</p>
        </div>
        <div className="white">
          <section className="menu-nav d-flex justify-content-between p-3 w-50 m-auto">
            {menu2.map((item, i) => (
              <Nav key={i}>
                <NavItem className="w-100 d-flex item-6 white-border">
                  <img
                    src={`Assets/Iteration-2-aseets/icons/${i + 1}.svg`}
                    alt={`Icon ${i + 1}`}
                  />
                  <NavLink className="black p-1 my-auto">
                    <span className="black">{item}</span>
                  </NavLink>
                </NavItem>
              </Nav>
            ))}
          </section>
        </div>
        <section className="d-flex justify-content-between menu-card my-5 w-50 m-auto">
          {products.map((item, i) => (
            <Card className="w-100" key={i}>
              <img
                src={`Assets/Iteration-2-aseets/pictures/food-${i + 1}.png`}
                alt={`Food ${i + 1}`}
              />
              <CardBody>
                <CardTitle tag="h4" className="m-0 p-0">
                  <div>{item.name}</div>
                </CardTitle>
              </CardBody>
              <CardBody>
                <CardText className="d-flex w-100 justify-content-between">
                  <span>{item.size}</span>
                  <div className="d-flex w-50 justify-content-between">
                    <span>{item.gram}</span>
                    <span className="fw-bold barlow">{item.price}</span>
                  </div>
                </CardText>
              </CardBody>
            </Card>
          ))}
        </section>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
