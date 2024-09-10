import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Nav = styled.nav`
  display: flex;
  width: 100%;
  justify-content: center;
  background-color: #ce2829;
`;
const TextContent = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 50%;
`;

const StyledLink = styled(Link)`
  color: white;
  text-decoration: none;
  }
`;

const StrongLink = styled(Link)`
  font-weight: bold;
  color: white;
  text-decoration: none;
`;

const HeaderNav = ({ location }) => {
  const headerVisible =
    location.pathname === "/" || location.pathname === "/order";

  return (
    <>
      {headerVisible && (
        <Nav>
          <TextContent>
            <StyledLink to="/home"> Anasayfa -&nbsp;</StyledLink>
            <StrongLink to="/order">Sipariş Oluştur</StrongLink>
          </TextContent>
        </Nav>
      )}
    </>
  );
};

export default HeaderNav;
