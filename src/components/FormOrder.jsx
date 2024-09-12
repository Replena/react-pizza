import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./Footer.jsx";
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
export default function FormOrder() {
  const [size, setSize] = useState("");
  const [total, setTotal] = useState(0);
  const [select, setSelect] = useState("");
  const [ingredients, setIngredients] = useState([]);
  const [count, setCount] = useState(1);
  const [name, setName] = useState("");
  const [notes, setNotes] = useState("");
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

  const handleRadioChange = (e) => {
    setSize(e.target.value);
    setTouches((prev) => ({ ...prev, size: true }));
  };
  const handleSelectChange = (e) => {
    setSelect(e.target.value);
    setTouches((prev) => ({ ...prev, select: true }));
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
    setTouches((prev) => ({ ...prev, name: true }));
  };
  const handleCheckboxChange = (e) => {
    if (e.target.checked) {
      setIngredients([...ingredients, e.target.id]);
    } else {
      setIngredients(
        ingredients.filter((ingredient) => ingredient !== e.target.id)
      );
    }
    setTouches((prev) => ({ ...prev, ingredients: true }));
  };

  const calculateSizePrice = (sizeChoose) => {
    const sizePrice = {
      orta: 10,
      büyük: 20,
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
      calculateSizePrice(size);
    setTotal(totalCalculate);
  }, [size, select, ingredients, count]);

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
      name: name,
      quantity: count,
      size: size,
      side: select,
      ingredients: ingredients,
      total: total,
      note: notes,
    };
    history.push({
      pathname: "/success",
      state: { formData: formData },
    });
    axios
      .post("https://reqres.in/api/pizza", formData)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <Container
        className="d-flex flex-column align-items-center my-5 container-fluid w-50 p-0"
        style={{ minHeight: "100vh" }}
      >
        <img
          className="order-pizza"
          src="../../Assets/Iteration-2-aseets/pictures/form-banner.png"
          alt=""
        />
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

          <FormGroup className="d-flex flex-column flex-md-row">
            <div className="w-100">
              <p>
                <strong>Boyut Seçimi</strong>
              </p>
              {pizzaData.sizeChoose.map((size, index) => (
                <FormGroup
                  key={index}
                  className="w-50 d-flex align-items-center"
                >
                  <Input
                    type="radio"
                    name="size"
                    id={size}
                    onChange={handleRadioChange}
                    value={size}
                    placeholder={size}
                    data-cy={`radio-${size}`}
                  />
                  <Label htmlFor={size} sm={2}>
                    {size}
                  </Label>
                </FormGroup>
              ))}
              {error.size && touches.size && (
                <p className="text-danger">{error.size}</p>
              )}
            </div>
            <div className="w-100 w-md-25 pl-0 pl-md-3">
              <Label htmlFor="sideChoose">
                <strong>Hamur Kalınlığı</strong>
              </Label>
              <Input
                id="sideChoose"
                name="select"
                type="select"
                onChange={handleSelectChange}
              >
                <option>Hamur Kalınlığı</option>
                {pizzaData.sideSelection.map((side, index) => (
                  <option key={index} value={side} className="bej">
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
                      onChange={handleCheckboxChange}
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
              placeholder="Lütfen adınızı ve soyadınızı girin"
              onChange={handleNameChange}
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
              placeholder="Siparişinizle ilgili notunuzu buraya yazabilirsiniz."
            />
          </FormGroup>
          <div className="my-4">
            {" "}
            <hr />
          </div>
          <div className="row d-flex">
            <div className="col-4">
              <FormGroup className="d-flex justify-content-end align-items-center">
                <Button color="warning" onClick={minus} className="w-50 p-3">
                  <strong> -</strong>
                </Button>
                <div className="w-50 d-flex justify-content-center p-3">
                  <strong>{count}</strong>
                </div>
                <Button color="warning" onClick={plus} className="w-50 p-3">
                  <strong> +</strong>
                </Button>
              </FormGroup>
            </div>
            <div className="col-8">
              <Card>
                <CardBody className="bej">
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
      <Footer />
    </>
  );
}
