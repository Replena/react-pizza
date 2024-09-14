import "./Success.css";

function Success({ orderData }) {
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

          {orderData && (
            <>
              <div className="order-details">
                <h3> {orderData.pizzaName}</h3>
                <p>
                  İsim: <strong>{orderData.name}</strong>
                </p>
                <p>
                  Boyut: <strong>{orderData.size}</strong>
                </p>
                <p>
                  Hamur: <strong>{orderData.side}</strong>
                </p>
                <p>
                  Adet: <strong>{orderData.quantity}</strong>
                </p>
                {orderData.note.length > 0 && <p>Not: {orderData.note}</p>}
                <p>
                  Hızlı Teslimat:{" "}
                  <strong>
                    {orderData.delivery ? "Hıızzlıııı" : "Seçilmedi"}
                  </strong>
                </p>
                <p>
                  Ek malzemeler:
                  {orderData.ingredients.map((ingredient, index) => (
                    <span key={index}> {ingredient},</span>
                  ))}
                </p>
              </div>
              <div className="order-sum">
                <div className="order-card">
                  <p className="d-flex justify-content-start mb-4">
                    Sipariş Toplamı
                  </p>
                  <p className="d-flex justify-content-between">
                    Seçimler:{" "}
                    <strong>{orderData.ingredients.length * 5}₺</strong>
                  </p>
                  <p className="d-flex justify-content-between">
                    Toplam: <strong>{orderData.total}₺</strong>
                  </p>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}

export default Success;
