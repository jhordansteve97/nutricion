import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import PropTypes from 'prop-types';
import { FormHelperText } from '@mui/material';

export const RadioGroupButton = ({ label, options, id, onChange, value, error, helperText, ...props }) => {
  return (
    <FormControl style={{minWidth: '120px'}} error={error} fullWidth>
      <FormLabel >{label}</FormLabel>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        id={id}
        name={id}
        value={value}
        onChange={onChange}
        {...props}
      >
        {options.map(item => <FormControlLabel key={item.value} value={item.value} control={<Radio />} label={item.label} /> )}
      </RadioGroup>
      {error && <FormHelperText>{helperText}</FormHelperText>}
    </FormControl>
  );
}

RadioGroupButton.propTypes = {
  /** Texto para del radio */
  label: PropTypes.string,
  /** opciones para que genere el radio */
  options: PropTypes.array.isRequired,
  /** Id del Radio */
  id: PropTypes.string,
  /** Funcion para actualizar el radio */
  onChange: PropTypes.func,
  /** Valor del radio */
  value: PropTypes.string,
  /** Validar si hay un error */
  error: PropTypes.bool,
  /** Mostrar el mensaje del error */
  helperText: PropTypes.string
}