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
  label: PropTypes.string,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired,
      image: PropTypes.element,
    })
  ).isRequired,
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};
