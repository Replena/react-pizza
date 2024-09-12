import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Header-Nav.css";
const Nav = styled.nav`
  display: flex;
  justify-content: center;
  margin: auto;
  width: 100%;
`;
const TextContent = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 50%;
  margin-top: 3rem;
  z-index: 100;
`;

const StyledLink = styled(Link)`
  color: white;
  text-decoration: none;
  color: #5f5f5f;
  }
`;

const StrongLink = styled(Link)`
  color: white;
  text-decoration: none;
  color: #ce2829;
`;

const HeaderNav = ({ location }) => {
  const headerVisible =
    location.pathname === "/" || location.pathname === "/order";

  return (
    <div>
      {headerVisible && (
        <>
          <Nav>
            <TextContent>
              <StyledLink to="/home"> Anasayfa -&nbsp;</StyledLink>
              <StrongLink to="/order">Sipariş Oluştur</StrongLink>
            </TextContent>
          </Nav>
        </>
      )}
    </div>
  );
};

export default HeaderNav;
