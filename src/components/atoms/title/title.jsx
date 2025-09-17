import PropTypes from 'prop-types';
import './title.css';
export const Title = ({icon, label}) => {
  return (
    <div className='container-title'>
      {icon} &nbsp;
      {label}
    </div>
  )
}

Title.propTypes = {
  /** Agrer icono en el titulo */
  icon: PropTypes.element,
  /** Agregar texto del titulo */
  label: PropTypes.string
}