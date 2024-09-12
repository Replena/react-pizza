import teknoLogo from "../assets/tekno.svg";
import styled from "styled-components";
import "./Header.css";
import { useLocation } from "react-router-dom";

const OrderHeader = styled.div`
  display: flex;
  justify-content: center;
  background: none;
  width: 100%;
  padding: 4rem 0;
  background: ${(props) =>
    props.isHome || props.isSuccess ? "none" : "#ce2829"};
  z-index: 2;
  position: ${(props) =>
    props.isHome || props.isSuccess ? "absolute" : "static"};
`;

const Header = () => {
  const headerLoc = useLocation();
  const isHome = location.pathname === "/home";
  const isSuccess = location.pathname === "/success";
  return (
    <OrderHeader isHome={isHome} isSuccess={isSuccess}>
      <img src={teknoLogo} id="logo" alt="Tekno logo" className="header-img" />
    </OrderHeader>
  );
};

export default Header;
