import styled from "styled-components";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import { useHistory } from "react-router-dom";
import "./Home.css";
import {
  Button,
  Card,
  CardBody,
  CardImg,
  CardImgOverlay,
  CardLink,
  CardText,
  CardTitle,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";

const HomeDiv = styled.div`
  background-image: url("../assets/iteration-1-assets/home-banner.png");
  background-size: cover;
  background-position: bottom;
  backgroound-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  height: 100vh;
  align-items: center;
  z-index: 5;
  padding-top: 5rem;
`;

const topTitle = styled.p`
  text-align: center;
  color: white;
  font-size: 2rem;
  font-weight: 300;
  font-family: "Barlow";
  padding-top: 5rem;
  padding-bottom: 5rem;
  font-family: "Satisfy", regular;
  color: #fdc913;
`;

const Title = styled.h1`
  text-align: center;
  color: white;
  font-size: 4rem;
  font-weight: 300;
  font-family: "Barlow";
`;

const MainButton = styled(Link)`
  display: flex;
  font-size: 1rem;
  justify-content: center;
  align-items: center;
  background-color: #fdc913;
  text-decoration: none;
  color: black;
  font-family: "Barlow";
  font-weight: 600;
  border-radius: 50px;
  border: none;
  padding: 0.7rem 3.5rem;
`;
////////////////////////////////////////
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
    button: "Sipariş Ver",
  },
  {
    cardTitle: "Hackatlon Burger Menu",
    button: "Sipariş Ver",
  },
  {
    red: `Çoooook\u00A0`,
    cardTitle: "hızlı npm gibi kurye",
    button: "Sipariş Ver",
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
      <HomeDiv>
        <p class="topTitle">fırsatı kaçırma </p>
        <Title>
          KOD ACIKTIRIR <br /> PİZZA DOYURUR
        </Title>
        <MainButton to="/order">ACIKTIM</MainButton>
      </HomeDiv>
      <div className="w-100 m-auto ">
        <div className="white">
          <section className="d-flex justify-content-between p-3 w-50 m-auto ">
            {menu1.map((item, i) => {
              return (
                <Nav key={i}>
                  <NavItem className="w-100 d-flex ">
                    <img src={`Assets/Iteration-2-aseets/icons/${i + 1}.svg`} />
                    <NavLink className="black p-1 my-auto">
                      <a className="black">{item}</a>
                    </NavLink>
                  </NavItem>
                </Nav>
              );
            })}
          </section>
        </div>
        <section className="d-flex justify-content-center gap-2 w-50 m-auto">
          <div>
            <Card fluid>
              <CardImg src={`../../Assets/Iteration-2-aseets/cta/kart-1.png`} />
              <CardImgOverlay className="p-4 w-75">
                <h3 className="menu-card-text">{cards[0].cardTitle}</h3>
                <CardText className="whiteText">{cards[0].product}</CardText>
                <a className="menu-card-button">{cards.button}SİPARİŞ VER</a>
              </CardImgOverlay>
            </Card>
          </div>

          <div className="d-flex  flex-column justify-content-between w-75 ">
            {cards.slice(1).map((card, i) => (
              <Card key={i + 1}>
                <CardImg
                  src={`../../Assets/Iteration-2-aseets/cta/kart-${i + 2}.png`}
                />
                <CardImgOverlay>
                  <div className="d-flex h-75 w-75 menu-card-secondary">
                    <p className="text-danger ">{card.red}</p>
                    <CardTitle>{card.cardTitle}</CardTitle>
                  </div>
                  <a className="menu-card-button">{cards.button}SİPARİŞ VER</a>
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
        <section className="d-flex justify-content-between my-4 w-50 m-auto">
          {menu2.map((item, i) => {
            return (
              <Nav key={i}>
                <NavItem className="w-100 d-flex item-6 white-border">
                  <img src={`Assets/Iteration-2-aseets/icons/${i + 1}.svg`} />
                  <NavLink className="black p-1 my-auto">
                    <a href="#" className="black">
                      {item}
                    </a>
                  </NavLink>
                </NavItem>
              </Nav>
            );
          })}
        </section>
        <section className="d-flex justify-content-between menu-card my-5 w-50 m-auto">
          {products.map((item, i) => {
            return (
              <Card className="w-100">
                <img
                  src={`Assets/Iteration-2-aseets/pictures/food-${i + 1}.png`}
                />
                <CardBody>
                  <CardTitle tag="h4" className="m-0 p-0">
                    <div className=""> {item.name}</div>
                  </CardTitle>
                </CardBody>
                <CardBody>
                  <CardText className="d-flex w-100 justify-content-between">
                    <span>{item.size}</span>
                    <div className="d-flex f w-50 justify-content-between">
                      <span>{item.gram}</span>
                      <span className="fw-bold barlow">{item.price}</span>
                    </div>
                  </CardText>
                </CardBody>
              </Card>
            );
          })}
        </section>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
