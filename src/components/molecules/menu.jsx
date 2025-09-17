import { useNavigate } from "react-router";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import logo from "../../assets/logo.png";
import { Button } from "@mui/material";
import { useEffect } from "react";

export const Menu = () => {
  const navigate = useNavigate();
  const user = localStorage.getItem("user");
  useEffect(() => {
    if (!user) navigate("/");
  }, [user, navigate]);

  const logout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("confirmData");
    localStorage.removeItem("step");
    navigate("/");
  };
  return (
    <nav className="menu">
      <div>
        <img src={logo} alt="Logo grupo salinas" height={50} />
      </div>
      <div className="item-menu">Nutrición</div>
      <Button className="item-menu" onClick={logout}>
        Salir
        <ExitToAppIcon />
      </Button>
    </nav>
  );
};
