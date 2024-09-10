import React, { useEffect, useState } from "react";
import {
  Form,
  FormGroup,
  FormText,
  Label,
  Input,
  Button,
  Card,
  CardBody,
} from "reactstrap";
import pizzaData from "./pizzaData.jsx";
import { useHistory } from "react-router-dom";
import axios from "axios";

export default function FormOrder() {
  const [size, setSize] = useState("");
  const [total, setTotal] = useState(0);
  const [select, setSelect] = useState("");
  const [ingredients, setIngredients] = useState([]);
  const [count, setCount] = useState(1);
  const [name, setName] = useState("");
  const [notes, setNotes] = useState("");
  const [radioSelect, setRadioSelect] = useState("");
  const [error, setError] = useState({
    size: "",
    select: "",
    ingredients: "",
    count: "",
    radioSelect: "",
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
  };
  const handleSelectChange = (e) => {
    setSelect(e.target.value);
  };

  const handleCheckboxChange = (e) => {
    if (e.target.checked) {
      setIngredients([...ingredients, e.target.id]);
    } else {
      setIngredients(
        ingredients.filter((ingredient) => ingredient !== e.target.id)
      );
    }
  };
  console.log("Size:", size);
  console.log("Select:", select);
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

  const plus = () => setCount(count + 1);
  const minus = () => setCount(count > 1 ? count - 1 : 1);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isValidate) {
      console.log("Form Hatalı");
      return;
    }

    history.push("/success");
    const formData = {
      name: name,
      quantity: count,
      size: size,
      side: select,
      ingredients: ingredients,
      total: total,
      note: notes,
    };
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
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <p>{pizzaData.name}</p>

          <div>{pizzaData.price.toFixed(2)}₺</div>

          <div>
            <span>{pizzaData.size}</span>
            <span>{pizzaData.oylayanKisiler}</span>
          </div>

          <FormText>{pizzaData.text}</FormText>
        </FormGroup>

        <FormGroup>
          <p>Boyut Seçimi</p>
          {pizzaData.sizeChoose.map((size, index) => (
            <div key={index}>
              <Input
                type="radio"
                name="size"
                id={size}
                onChange={handleRadioChange}
                value={size}
              />
              <Label htmlFor={size}>{size}</Label>
            </div>
          ))}
        </FormGroup>

        <FormGroup>
          <Label htmlFor="sideChoose"> </Label>

          <Input
            id="sideChoose"
            name="select"
            type="select"
            onChange={handleSelectChange}
          >
            <option>Hamur Kalınlığı</option>
            {pizzaData.sideSelection.map((side, index) => (
              <option key={index} value={side}>
                {side}
              </option>
            ))}
          </Input>
        </FormGroup>

        <FormGroup>
          <p>Ek Malzemeler</p>
          <p>
            En Fazla 10 malzeme seçebilirsiniz. Lütfen en az 4 malzeme seçin
            (5₺)
          </p>
          {pizzaData.ingredientsData.map((ingredient, index) => (
            <div key={index}>
              <Input
                type="checkbox"
                id={ingredient}
                onChange={handleCheckboxChange}
              />
              <Label htmlFor={ingredient}>{ingredient}</Label>
            </div>
          ))}
        </FormGroup>

        <FormGroup>
          <Label htmlFor="isim">Adınız Soyadınız:</Label>
          <Input
            type="text"
            id="isim"
            placeholder="Lütfen adınızı ve soyadınızı girin"
          />
        </FormGroup>

        <FormGroup>
          <Label htmlFor="order-note">Sipariş Notunuz:</Label>
          <Input
            type="textarea"
            id="order-note"
            placeholder="Siparişinizle ilgili notunuzu buraya yazabilirsiniz."
          />
        </FormGroup>

        <FormGroup>
          <div>
            <Button color="warning" onClick={minus}>
              -
            </Button>
            <div>{count}</div>
            <Button color="warning" onClick={plus}>
              +
            </Button>
          </div>
          <Card>
            <CardBody>
              <p>Sipariş Toplamı</p>
              <span>{`Seçimler: `}</span>
              <span>{"₺"}</span>
              <span>{`Toplam: `}</span>
              <span>{`${total.toFixed(2)}₺`}</span>
            </CardBody>
          </Card>

          <Button color="warning">SİPARİŞ VER</Button>
        </FormGroup>
      </Form>
    </>
  );
}
