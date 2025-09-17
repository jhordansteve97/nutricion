import PropTypes from "prop-types";
import "./radio.css";

export const Radio = ({ options, value, onChange, onBlur, name, label }) => {
  return (
    <div>
      <p>{label}</p>
      <div className="radio-container">
        {options.map((option) => (
          <button
            key={option.value}
            type="button"
            className={`radio-button ${value === option.value && "radio-button-activate"}`}
            onClick={() => {
              onChange(option.value);
              onBlur && onBlur({ target: { name, value: option.value } });
            }}
          >
            {option.image}
            <span>{option.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
};


Radio.propTypes = {
  /** Texto del radio */
  label: PropTypes.string,
  /** Opciones del radio */
  options: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired,
      image: PropTypes.element,
    })
  ).isRequired,
  /** Valor del radio */
  value: PropTypes.string,
  /** Funcion para actualizar el radio */
  onChange: PropTypes.func.isRequired,
};
