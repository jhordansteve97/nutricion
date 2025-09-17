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
  /** Valor del selec */
  value: PropTypes.string,
  /** Funcion para actualizar el select */
  onChange: PropTypes.func,
  /** Texto para del select */
  label: PropTypes.string,
  /** opciones para que genere el select */
  options: PropTypes.array,
  /** Validar si hay un error */
  error: PropTypes.bool,
  /** Mostrar el mensaje del error */
  helperText: PropTypes.string,
};
