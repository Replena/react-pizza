import React, { useEffect } from "react";
import Footer from "./Footer";
import { useLocation } from "react-router-dom";
import "./Success.css";

function Success() {
  const location = useLocation();
  const { formData } = location.state || {};

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className="success-wrapper">
        <div className="success-content">
          <p className="lezzetin-yolda">lezzetin yolda</p>
          <h1 className="success-text">SİPARİŞ ALINDI</h1>

          <hr className="cross" />

          {formData && (
            <>
              <div className="order-details">
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
              </div>
              <div className="order-sum">
                <div className="order-card">
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
              </div>
            </>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Success;
