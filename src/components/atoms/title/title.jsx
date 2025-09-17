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
  icon: PropTypes.element,
  label: PropTypes.string
}