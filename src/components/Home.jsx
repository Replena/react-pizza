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
  top: 0;
  background-image: url("../assets/iteration-1-assets/home-banner.png");
  background-size: cover;
  background-position: bottom;
  backgroound-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const topTitle = styled.h3`
  text-align: center;
  color: white;
  font-size: 2rem;
  font-weight: 300;
  font-family: "Barlow";
  padding-top: 5rem;
  padding-bottom: 5rem;
`;

const Title = styled.h1`
  text-align: center;
  color: white;
  font-size: 4rem;
  font-weight: 300;
  font-family: "Barlow";
  padding-bottom: 5rem;
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
  padding: 1rem 4rem;
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
  },
  {
    cardTitle: "Hackatlon Burger Menu",
  },
  {
    cardTitle: "Hızlı npm gibi kurye",
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
    <>
      <HomeDiv>
        <topTitle> fırsatı kaçırma </topTitle>
        <Title>
          KOD ACIKTIRIR <br /> PİZZA DOYURUR
        </Title>
        <MainButton to="/order">ACIKTIM</MainButton>
      </HomeDiv>
      <section className="d-flex justify-content-center">
        {menu1.map((item, i) => {
          return (
            <Nav key={i}>
              <NavItem className="w-100 d-flex ">
                <img src={`Assets/Iteration-2-aseets/icons/${i + 1}.svg`} />
                <NavLink>{item}</NavLink>
              </NavItem>
            </Nav>
          );
        })}
      </section>

      <section>
        <div className="w-25">
          <Card>
            <CardImg src={`../../Assets/Iteration-2-aseets/cta/kart-1.png`} />
            <CardImgOverlay>
              <CardTitle>{cards[0].cardTitle}</CardTitle>
              <CardText>{cards[0].product}</CardText>
            </CardImgOverlay>
          </Card>
        </div>

        <div>
          {cards.slice(1).map((card, i) => (
            <Card key={i + 1} className="w-25">
              <CardImg
                src={`../../Assets/Iteration-2-aseets/cta/kart-${i + 2}.png`}
              />
              <CardImgOverlay>
                <CardTitle>{card.cardTitle}</CardTitle>
              </CardImgOverlay>
            </Card>
          ))}
        </div>
      </section>
      <div>
        <p>en çok paketlenen menüler</p>
        <p>Acıktıran Kodlara Doyuran Lezzetler</p>
      </div>
      <section className="menu-section">
        {menu2.map((item, i) => {
          return (
            <Nav key={i} className="menu-items">
              <NavItem className="w-100 d-flex">
                <img src={`Assets/Iteration-2-aseets/icons/${i + 1}.svg`} />
                <NavLink>{item}</NavLink>
              </NavItem>
            </Nav>
          );
        })}
      </section>
      <section className="d-flex w-75 justify-content-center">
        {products.map((item, i) => {
          return (
            <Card className="w-25">
              <img
                src={`Assets/Iteration-2-aseets/pictures/food-${i + 1}.png`}
              />
              <CardBody>
                <CardTitle tag="h4">{item.name}</CardTitle>
              </CardBody>
              <CardBody>
                <CardText className="d-flex w-100 justify-content-between">
                  <span>{item.size}</span>
                  <div className="justify-content-end w-50">
                    <span>{item.gram}</span>
                    <span>{item.price}</span>
                  </div>
                </CardText>
              </CardBody>
            </Card>
          );
        })}
      </section>
      <Footer />
    </>
  );
}

export default Home;
