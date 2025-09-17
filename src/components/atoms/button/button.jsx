import PropTypes from "prop-types";
import { Button } from "@mui/material";

export const Buttons = ({
  onClick,
  label,
  disabled,
  fullWidth=false,
  type = "submit",
  variant = "contained",
}) => {
  return (
    <Button
      disabled={disabled}
      style={{ textTransform: "none", fontWeight: 'bold', borderRadius: '28px', padding: '12px 52px' }}
      onClick={onClick}
      type={type}
      variant={variant}
      fullWidth={fullWidth}
    >
      {label}
    </Button>
  );
};

Buttons.propTypes = {
  /** Agrega la funcion que necesites con Onclick*/
  onClick: PropTypes.func,
  /** Agrega el texto del boton */
  label: PropTypes.string,
  /** Desahabilita el boton */
  disabled: PropTypes.bool,
  /** Hace que el boton obtenga todo el ancho*/
  fullWidth: PropTypes.bool,
  /** Especifica el tipo de button */
  type: PropTypes.oneOf(["button", "reset", "submit"]),
  /** Especifica el diseño del boton */
  variant: PropTypes.oneOf(["text", "contained", "outlined"]),
}