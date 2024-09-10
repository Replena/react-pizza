import styled from "styled-components";
import { Link } from "react-router-dom";
const HomeDiv = styled.div`
  height: 100vh;
  background-image: url("../assets/iteration-1-assets/home-banner.png");
  background-size: cover;
  background-position: bottom;
  backgroound-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Title = styled.h1`
  text-align: center;
  margin: 0;
  height: 61px;
  color: white;
`;

const Button = styled(Link)`
  display: flex;
  max-width: 5rem;
  justify-content: center;
  align-items: center;
  background-color: #fdc913;
  text-decoration: none;
  color: #000000;
  font-family: "Barlow";
  font-weight: 600;
  border-radius: 20px;
  padding: 1rem;
`;

function Home() {
  return (
    <HomeDiv>
      <img src="Assets/Iteration-1-assets/kod-aciktirir.svg" alt="" />
      <Title>
        KOD ACIKTIRIR <br /> PİZZA DOYURUR
      </Title>
      <Button to="/order">ACIKTIM</Button>
    </HomeDiv>
  );
}

export default Home;
