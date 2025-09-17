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
  onClick: PropTypes.func,
  label: PropTypes.string,
  disabled: PropTypes.bool,
  fullWidth: PropTypes.bool,
  type: PropTypes.oneOf(["button", "reset", "submit"]),
  variant: PropTypes.oneOf(["text", "contained", "outlined"]),
}