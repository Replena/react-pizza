import { Card, CardBody } from "reactstrap";

export default function OrderSum({ ingredients, total }) {
  return (
    <Card>
      <CardBody>
        <p>
          <strong>Sipariş Toplamı</strong>
        </p>
        <div className="d-flex justify-content-between">
          <span>{`Seçimler: `}</span>
          <span>{`${ingredients.length * 5}₺`}</span>
        </div>
        <div className="d-flex justify-content-between">
          <span>{` Toplam: `}</span>
          <span>{`${total.toFixed(2)}₺`}</span>
        </div>
      </CardBody>
    </Card>
  );
}
