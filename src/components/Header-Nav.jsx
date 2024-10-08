import { Link } from "react-router-dom";
import "./Header-Nav.css";

const HeaderNav = ({ location }) => {
  const headerVisible = location.pathname === "/order";

  return (
    <div>
      {headerVisible && (
        <nav className="nav">
          <div className="text-content">
            <Link to="/home" className="styled-link">
              Anasayfa -&nbsp;
            </Link>
            <Link to="/order" className="strong-link">
              Sipariş Oluştur
            </Link>
          </div>
        </nav>
      )}
    </div>
  );
};

export default HeaderNav;
