import styled from "styled-components";
import Footer from "./Footer";
import "./Success.css";
import { useLocation } from "react-router-dom";

const SuccessWrapper = styled.div`
  background-color: #ce2829;
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 0 !important;
  padding-top: 10%;
  padding-bottom: 10%;
`;

const SuccessContent = styled.div`
  width: 100%;
  max-width: 600px;
  text-align: center;
  color: white;
`;

const LezzetinYolda = styled.p`
  font-size: 1.5rem;
  color: #ffd700;
  margin-bottom: 0.5rem;
  font-family: "Satisfy", regular;
`;

const SuccessText = styled.h1`
  font-size: 4rem;
  font-weight: 300;
  margin-bottom: 2rem;
`;

const OrderDetails = styled.div`
  text-align: left;
  width: 40%;
  margin: auto;
  margin-bottom: 1.5rem;
  margin-top: 2rem;
`;

const OrderSum = styled.div`
  border: 1px solid white;
  width: 60%;
  margin: 0 auto;
  border-radius: 8px;
  padding: 2rem;
`;

function Success() {
  const location = useLocation();
  const { formData } = location.state || {};

  return (
    <>
      <SuccessWrapper>
        <SuccessContent>
          <LezzetinYolda>lezzetin yolda</LezzetinYolda>
          <SuccessText>SİPARİŞ ALINDI</SuccessText>

          <hr className="cross" />

          {formData && (
            <>
              <OrderDetails>
                <p>{formData.name}</p>
                <p>
                  Boyut: <strong>{formData.size}</strong>
                </p>
                <p>
                  Hamur: <strong>{formData.side}</strong>
                </p>
                <p>
                  Ek Malzemeler:{" "}
                  <strong>{formData.ingredients.join(", ")}</strong>
                </p>
              </OrderDetails>
              <OrderSum>
                <div class="order-card w-100 m-auto">
                  <p className="d-flex justify-content-start mb-4">
                    Sipariş Toplamı
                  </p>
                  <p className="d-flex justify-content-between">
                    Seçimler:{" "}
                    <strong>{formData.ingredients.length * 5}₺</strong>
                  </p>
                  <p className="d-flex justify-content-between">
                    Toplam: <strong>{formData.total}₺</strong>
                  </p>
                </div>
              </OrderSum>
            </>
          )}
        </SuccessContent>
      </SuccessWrapper>
      <Footer />
    </>
  );
}

export default Success;
