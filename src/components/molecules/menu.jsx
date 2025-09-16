import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import logo from "../../assets/logo.png";
import { Link } from "react-router";

export const Menu = () => {
  return (
    <nav className="menu">
      <div>
        <img src={logo} alt="Logo grupo salinas" height={50} />
      </div>
      <div className="item-menu">Nutrición</div>
      <Link className="item-menu" to="/">
        Salir
        <ExitToAppIcon />
      </Link>
    </nav>
  );
};
