import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Form,
  FormGroup,
  FormText,
  Label,
  Input,
  Button,
  Container,
  Card,
  CardBody,
} from "reactstrap";
import pizzaData from "./pizzaData.jsx";
import { useHistory } from "react-router-dom";
import axios from "axios";
import {
  nameValidate,
  sizeValidate,
  selectValidate,
  ingredientsValidate,
} from "./validateForm.jsx";
import "./FormOrder.css";

export default function FormOrder({ setOrderData }) {
  const [size, setSize] = useState("");
  const [total, setTotal] = useState(0);
  const [select, setSelect] = useState("");
  const [ingredients, setIngredients] = useState([]);
  const [count, setCount] = useState(1);
  const [name, setName] = useState("");
  const [notes, setNotes] = useState("");
  const [delivery, setDelivery] = useState(false);
  const [error, setError] = useState({
    size: "",
    select: "",
    ingredients: "",
    name: "",
  });
  const [isValidate, setIsValidate] = useState(false);
  const [touches, setTouches] = useState({
    size: false,
    select: false,
    ingredients: false,
    name: false,
  });
  const history = useHistory();

  const handleChange = (e) => {
    const { name, value, type, checked, id } = e.target;

    if (type === "radio" && name === "size") {
      setSize(value);
      setTouches((prev) => ({ ...prev, size: true }));
    }

    if (name === "select") {
      setSelect(value);
      setTouches((prev) => ({ ...prev, select: true }));
    }

    if (type === "text" && name === "name") {
      setName(value);
      setTouches((prev) => ({ ...prev, name: true }));
    }

    if (type === "checkbox") {
      if (name === "teslimat") {
        setDelivery(checked);
      } else {
        if (checked) {
          setIngredients([...ingredients, id]);
        } else {
          setIngredients(ingredients.filter((ingredient) => ingredient !== id));
        }
        setTouches((prev) => ({ ...prev, ingredients: true }));
      }
    }
  };

  const calculateSizePrice = (sizeChoose) => {
    const sizePrice = {
      M: 10,
      L: 20,
    };
    return sizePrice[sizeChoose] || 0;
  };

  const calculateSidePrice = (sideSelection) => {
    const sidePrice = {
      ince: 10,
      kalın: 15,
    };
    return sidePrice[sideSelection] || 0;
  };

  useEffect(() => {
    const totalCalculate =
      pizzaData.price * count +
      ingredients.length * 5 +
      calculateSidePrice(select) +
      calculateSizePrice(size) +
      (delivery ? 50 : 0);

    setTotal(totalCalculate);
  }, [size, select, ingredients, count, delivery]);

  useEffect(() => {
    let errors = {
      size: "",
      select: "",
      ingredients: "",
      name: "",
    };

    if (!nameValidate(name)) {
      errors.name = "Lütfen adınızı soyadınızı giriniz";
    }

    if (!sizeValidate(size)) {
      errors.size = "Lütfen pizza boyutunu seçin.";
    }

    if (!selectValidate(select)) {
      errors.select = "Lütfen hamur kalınlığını seçin.";
    }

    if (!ingredientsValidate(ingredients)) {
      errors.ingredients = "4 ile 10 arasında malzeme seçmelisiniz.";
    }

    setError(errors);
    if (
      nameValidate(name) &&
      sizeValidate(size) &&
      selectValidate(select) &&
      ingredientsValidate(ingredients)
    ) {
      setIsValidate(true);
    } else {
      setIsValidate(false);
    }
  }, [name, size, select, ingredients]);

  const plus = () => setCount(count + 1);
  const minus = () => setCount(count > 1 ? count - 1 : 1);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isValidate) {
      console.log("Form Hatalı");
      return;
    }
    const formData = {
      pizzaName: pizzaData.name,
      name: name,
      quantity: count,
      size: size,
      side: select,
      ingredients: ingredients,
      total: total,
      note: notes,
      delivery: delivery,
    };
    history.push({
      pathname: "/success",
      state: { formData: formData },
    });
    axios
      .post("https://reqres.in/api/pizza", formData)
      .then((response) => {
        console.log(response.data);
        setOrderData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <Container
        className="d-flex flex-column align-items-center my-5 container-fluid w-25 p-0"
        style={{ minHeight: "100vh" }}
      >
        <Form onSubmit={handleSubmit} className="w-100">
          <FormGroup className="bej">
            <h4>{pizzaData.name}</h4>
            <div className="d-flex justify-content-between align-items-center mt-4 mb-3">
              <strong className="fs-3">{pizzaData.price.toFixed(2)}₺</strong>
              <div className="text-right col-4 d-flex justify-content-between">
                <span>{pizzaData.size}</span>
                <span>{` ${pizzaData.oylayanKisiler}`}</span>
              </div>
            </div>
            <FormText>{pizzaData.text}</FormText>
          </FormGroup>

          <FormGroup className="d-flex flex-md-row justify-content-between">
            <FormGroup className="size-selection">
              <p>
                <strong>Boyut Seçimi</strong>
              </p>
              <div className="radio-buttons">
                {pizzaData.sizeChoose.map((size, index) => (
                  <FormGroup key={index} className="d-flex align-items-center">
                    <Input
                      type="radio"
                      name="size"
                      id={size}
                      onChange={handleChange}
                      value={size}
                      className="size-radio"
                      data-cy={`radio-${size}`}
                    />
                    <Label htmlFor={size} className="size-label">
                      {size}
                    </Label>
                  </FormGroup>
                ))}
              </div>
              {error.size && touches.size && (
                <p className="text-danger">{error.size}</p>
              )}
            </FormGroup>
            <div className="side-selection w-50 pl-0 pl-md-3">
              <Label htmlFor="sideChoose">
                <strong>Hamur Kalınlığı</strong>
              </Label>
              <Input
                id="sideChoose"
                name="select"
                type="select"
                onChange={handleChange}
                className="side-select"
              >
                <option>Hamur Kalınlığı</option>
                {pizzaData.sideSelection.map((side, index) => (
                  <option key={index} value={side}>
                    {side}
                  </option>
                ))}
              </Input>
              {error.select && touches.select && (
                <p className="text-danger">{error.select}</p>
              )}
            </div>
          </FormGroup>

          <FormGroup>
            <p>
              {" "}
              <strong>Ek Malzemeler</strong>
            </p>
            <p>En Fazla 10 malzeme seçebilirsiniz. (5₺)</p>
            <div className="d-flex flex-wrap">
              {pizzaData.ingredientsData.map((ingredient, index) => (
                <div key={index} className="col-4 d-flex gap-1">
                  <div className="d-flex justify-content-between">
                    <Input
                      type="checkbox"
                      id={ingredient}
                      onChange={handleChange}
                      data-cy={`checkbox-${ingredient.id}`}
                      className="check-model"
                    />
                  </div>
                  <div className="ingredients-text">
                    <Label htmlFor={ingredient}>{ingredient}</Label>
                  </div>
                </div>
              ))}
            </div>
            {error.ingredients && touches.ingredients && (
              <p data-cy="ingredientsError" className="text-danger">
                {error.ingredients}
              </p>
            )}
          </FormGroup>

          <FormGroup>
            <Label htmlFor="isim">
              <strong>Adınız Soyadınız:</strong>
            </Label>
            <Input
              className="bej"
              type="text"
              id="isim"
              name="name"
              placeholder="Lütfen adınızı ve soyadınızı girin"
              onChange={handleChange}
            />
            {error.name && touches.name && (
              <p className="text-danger" data-cy="nameError">
                {error.name}
              </p>
            )}
          </FormGroup>

          <FormGroup>
            <Label htmlFor="order-note">
              <strong>Sipariş Notunuz:</strong>
            </Label>
            <Input
              className="bej"
              type="textarea"
              id="order-note"
              name="notes"
              placeholder="Siparişinizle ilgili notunuzu buraya yazabilirsiniz."
              onChange={(e) => setNotes(e.target.value)}
            />
          </FormGroup>
          <div className="my-4">
            {" "}
            <hr />
          </div>

          <FormGroup className="delivery-wrapper">
            <Input
              type="checkbox"
              id="teslimat"
              name="teslimat"
              checked={delivery}
              onChange={handleChange}
              data-cy="teslimat"
              className="delivery-check"
            />
            <Label htmlFor="teslimat" className="delivery-label">
              Teslimat Ücreti (50₺)
            </Label>
          </FormGroup>

          <div className="row">
            <div className="col-4">
              <FormGroup className="d-flex button-container h-50">
                <Button
                  color="warning"
                  onClick={minus}
                  className=" button-minus"
                >
                  <strong> -</strong>
                </Button>
                <div className="d-flex   button-wrapper">
                  <strong>{count}</strong>
                </div>
                <Button color="warning" onClick={plus} className="button-plus">
                  <strong> +</strong>
                </Button>
              </FormGroup>
            </div>
            <div className="col-8">
              <Card className="bej">
                <CardBody className="bej m-3">
                  <p>
                    <strong>Sipariş Toplamı</strong>
                  </p>
                  <div className="d-flex justify-content-between my-2">
                    <span>{`Seçimler: `}</span>
                    <span>{`${ingredients.length * 5}₺`}</span>
                  </div>
                  <div className="d-flex justify-content-between">
                    <span className="text-danger">{` Toplam: `}</span>
                    <span className="text-danger">{`${total.toFixed(
                      2
                    )}₺`}</span>
                  </div>
                </CardBody>
              </Card>
              <Button
                color="warning"
                disabled={!isValidate}
                className="w-100"
                data-cy="submit"
              >
                SİPARİŞ VER
              </Button>
            </div>
          </div>
        </Form>
      </Container>
    </>
  );
}
