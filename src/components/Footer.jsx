import { Col, Container, Row } from "reactstrap";
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
  "../../Assets/Iteration-2-aseets/footer/insta/li-3.png",
  "../../Assets/Iteration-2-aseets/footer/insta/li-4.png",
  "../../Assets/Iteration-2-aseets/footer/insta/li-5.png",
];
function Footer() {
  return (
    <>
      <footer className="py-5 container-fluid">
        <Container>
          <Row>
            <Col md="4">
              <img
                src="../../Assets/Iteration-2-aseets/footer/logo-footer.svg"
                alt="Teknolojik Yemekler"
              />
              <div className="mt-4">
                {address.map((item, i) => (
                  <div key={i} className="d-flex align-items-center mt-3">
                    <img
                      src={`../../Assets/Iteration-2-aseets/footer/icons/icon-${
                        i + 1
                      }.png`}
                      alt="Icon"
                      className="me-2"
                    />
                    <p className="m-0">{item}</p>
                  </div>
                ))}
              </div>
            </Col>

            <Col md="4">
              <h5 className="topMargin">Hot Menu</h5>
              <ul className="list-unstyled mt-3">
                {navFooter.map((item, i) => (
                  <li key={i} className="my-3">
                    {item}
                  </li>
                ))}
              </ul>
            </Col>

            <Col md="4">
              <h5 className="topMargin">Instagram</h5>
              <div className="d-flex flex-wrap justify-content-start mt-3 w-100">
                {instagramPhotos.map((image, i) => (
                  <img
                    key={i}
                    src={image}
                    alt={`Instagram ${i}`}
                    className="img-fluid m-1 w-25 h-25"
                    style={{ width: "70px", height: "70px" }}
                  />
                ))}
              </div>
            </Col>
          </Row>

          <Row>
            <Col md="12 m-auto">
              <hr className="my-4" style={{ borderColor: "#4A4A4A" }} />

              <div className="d-flex justify-content-between align-items-center m-auto">
                <p className="m-0">© 2023 Teknolojik Yemekler. </p>
                <img
                  src="../../Assets/Iteration-2-aseets/footer/twitter-brands-solid.svg"
                  width="25"
                  alt="Twitter"
                  className="twitter"
                />
              </div>
            </Col>
          </Row>
        </Container>
      </footer>
    </>
  );
}

export default Footer;
