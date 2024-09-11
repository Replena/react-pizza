import styled from "styled-components";
import Footer from "./Footer";
import "./Success.css";
import { useLocation } from "react-router-dom";
import OrderSum from "./OrderSum";
const SuccessWrapper = styled.div`
  background: #ce2829;
  width: 70%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const SuccessText = styled.h1`
  text-align: center;
  font-size: 5rem;
  color: white;
  font-family: "Roboto Condensed", sans-serif;
  font-weight: 200;
`;

function Success() {
  const location = useLocation();
  const { formData } = location.state || {};

  return (
    <>
      {" "}
      <div className="bRed">
        <SuccessWrapper>
          <p className="yellowText d-flex justify-content-center">
            lezzetin yolda
          </p>
          <SuccessText>SİPARİŞ ALINDI</SuccessText>
          {formData && (
            <div className="white">
              <h3>{formData.name}</h3>
              <div>
                <p>
                  Boyut: <strong>{formData.size}</strong>
                </p>
                <p>
                  Hamur: <strong>{formData.side}</strong>
                </p>
                <p>
                  Malzemeler: <strong>{formData.ingredients.join(", ")}</strong>
                </p>
              </div>
              <div className="white bRed">
                <OrderSum
                  ingredients={formData.ingredients}
                  total={formData.total}
                />
              </div>
            </div>
          )}
        </SuccessWrapper>

        <Footer />
      </div>
    </>
  );
}

export default Success;
