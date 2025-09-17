import PropTypes from "prop-types";
import { InputAdornment, TextField } from "@mui/material";

export const Input = ({
  value,
  onChange,
  label,
  variant = "standard",
  icon,
  adornments,
  ...props
}) => {
  return (
    <TextField
      onChange={onChange}
      label={
        <span style={{ display: "flex", alignItems: "center", color: "#000" }}>
          {icon ?? icon} &nbsp; {label}
        </span>
      }
      variant={variant}
      value={value}
      slotProps={adornments && {
        input: {
          endAdornment: <InputAdornment position="end">{adornments}</InputAdornment>,
        },
      }}
      {...props}
    />
  );
};

Input.propTypes = {
  /** Valor del input */
  value: PropTypes.string.isRequired,
  /** Funcion para actualizar el input */
  onChange: PropTypes.func.isRequired,
  /** Texto para el input */
  label: PropTypes.string,
  /** Diseño del input */
  variant: PropTypes.oneOf(["standard", "outlined-basic", "filled-basic"]),
  /** Agregar texto al final sin que afecte el valor  */
  adornments: PropTypes.string
};
