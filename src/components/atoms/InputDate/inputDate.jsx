import PropTypes from "prop-types";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import dayjs from "dayjs";
import "dayjs/locale/es-mx";

export const InputDate = ({ label, onChange, value }) => {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="es-mx">
      <DatePicker
        label={label}
        value={value}
        onChange={(newValue) => {
          onChange(newValue);
        }}
        slotProps={{
          textField: {
            variant: "standard",
          },
          popper: { disableScrollLock: true }
        }}
      />
    </LocalizationProvider>
  );
};

InputDate.propTypes = {
  /** Texto del input */
  label: PropTypes.string,
  /** Funcion para actualizar el input */
  onChange: PropTypes.func,
  /** Valor del input */
  value: PropTypes.oneOfType([
    PropTypes.object, // dayjs
    PropTypes.instanceOf(dayjs), // más específico
    PropTypes.null,
  ]),
};
