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
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  label: PropTypes.string,
  variant: PropTypes.oneOf(["standard", "outlined-basic", "filled-basic"]),
  adornments: PropTypes.string
};
