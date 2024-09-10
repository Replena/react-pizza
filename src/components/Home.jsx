import styled from "styled-components";
import { Link } from "react-router-dom";
const HomeDiv = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
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
  color: white;
  font-size: 4rem;
  font-weight: 300;
  font-family: "Barlow";
  padding-bottom: 5rem;
`;

const Button = styled(Link)`
  display: flex;
  font-size: 1rem;
  justify-content: center;
  align-items: center;
  background-color: #fdc913;
  text-decoration: none;
  color: black;
  font-family: "Barlow";
  font-weight: 600;
  border-radius: 50px;
  border: none;
  padding: 1rem 4rem;
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
