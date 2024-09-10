import teknoLogo from "../assets/tekno.svg";
import styled from "styled-components";

const OrderHeader = styled.div`
  display: flex;
  justify-content: center;
  background-color: #ce2829;
  width: 100%;
  padding: 4rem 0;
`;

const Header = () => {
  return (
    <OrderHeader>
      <img src={teknoLogo} id="logo" alt="Tekno logo" />
    </OrderHeader>
  );
};

export default Header;
