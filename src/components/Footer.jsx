import {
  Col,
  Container,
  Nav,
  NavbarText,
  NavItem,
  NavLink,
  Row,
} from "reactstrap";
import "./Footer.css";
const address = [
  `341 Londonderry Road,\n Istanbul Türkiye`,
  "aciktim@teknolojikyemekler.com",
  "+90 216 123 45 67",
];

const navFooter = [
  "Terminal Pizza",
  "5 Kişilik Hackathlon Pizza",
  "useEffect Tavuklu Pizza",
  "Beyaz  Console Frosty",
  "Testler Geçti Mutlu Burger",
  "Position Absolute Acı Burger",
];

const instagramPhotos = [
  "../../Assets/Iteration-2-aseets/footer/insta/li-0.png",
  "../../Assets/Iteration-2-aseets/footer/insta/li-1.png",
  "../../Assets/Iteration-2-aseets/footer/insta/li-2.png",
  "../../Assets/Iteration-2-aseets/footer/insta/li-4.png",
  "../../Assets/Iteration-2-aseets/footer/insta/li-5.png",
];
function Footer() {
  return (
    <>
      <footer>
        <div className="w-75 d-flex justify-content-center mt-5">
          <Container>
            <div>
              <img
                src="../../Assets/Iteration-2-aseets/footer/logo-footer.svg"
                alt=""
              />
            </div>
            <div>
              {address.map((item, i) => {
                return (
                  <div key={i} className="d-flex ">
                    <div className="w-5">
                      <img
                        src={`../../Assets/Iteration-2-aseets/footer/icons/icon-${
                          i + 1
                        }.png`}
                      />
                    </div>
                    <p>{item}</p>
                  </div>
                );
              })}
            </div>
          </Container>

          <Nav>
            <NavbarText>Hot Menu</NavbarText>
            {navFooter.map((item, i) => (
              <NavItem key={i}>
                <NavLink>{item}</NavLink>
              </NavItem>
            ))}
          </Nav>
          <div>
            <p>Instagram</p>
            {instagramPhotos.map((image, i) => (
              <img key={i} src={image} />
            ))}
          </div>
        </div>
        <hr />

        <div className="d-flex justify-content-between">
          <p className="my-2">© 2023 Teknolojik Yemekler. </p>

          <img
            src="../../Assets/Iteration-2-aseets/footer/twitter-brands-solid.svg"
            width="25"
          />
        </div>
      </footer>
    </>
  );
}

export default Footer;
