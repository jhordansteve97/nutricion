import PropTypes from "prop-types";
import { TextField } from "@mui/material";

export const Input = ({
  id,
  value,
  onChange,
  onBlur,
  label,
  variant = "standard",
  icon,
  fullWidth,
  disabled,
  error,
  helperText,
  type="text",
  defaultValue,
  focused=false
}) => {
  return (
    <TextField
      id={id}
      onChange={onChange}
      onBlur={onBlur}
      label={
        <span style={{ display: "flex", alignItems: "center", color: "#000" }}>
          {icon ?? icon} {label}
        </span>
      }
      variant={variant}
      fullWidth={fullWidth}
      disabled={disabled}
      value={value}
      error={error}
      helperText={helperText}
      type={type}
      defaultValue={defaultValue}
      focused={focused}
    />
  );
};

Input.propTypes = {
  id: PropTypes.string,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onBlur: PropTypes.func,
  label: PropTypes.string,
  variant: PropTypes.oneOf(["standard", "outlined-basic", "filled-basic"]),
  icon: PropTypes.element,
  fullWidth: PropTypes.bool,
  disabled: PropTypes.bool,
  error: PropTypes.bool,
  helperText: PropTypes.string,
  type: PropTypes.oneOf(["number", "text", "tel", "file", "email", "date"]),
  defaultValue: PropTypes.string,
  focused: PropTypes.bool
};
