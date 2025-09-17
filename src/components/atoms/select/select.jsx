import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import PropTypes from "prop-types";
import { FormHelperText } from "@mui/material";

export const SelectForm = ({
  value,
  onChange,
  label,
  options,
  error,
  helperText,
  ...props
}) => {
  return (
    <FormControl variant="standard" error={error}>
      <InputLabel id="demo-simple-select-label">{label}</InputLabel>
      <Select
        style={{minWidth: '200px'}}
        value={value}
        label={label}
        onChange={onChange}
        {...props}
      >
        {options.map((item) => (
          <MenuItem key={item.value} value={item.value}>
            {item.label}
          </MenuItem>
        ))}
      </Select>
      <FormHelperText>{helperText}</FormHelperText>
    </FormControl>
  );
};

SelectForm.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
  label: PropTypes.string,
  options: PropTypes.array,
  error: PropTypes.bool,
  helperText: PropTypes.string,
};
