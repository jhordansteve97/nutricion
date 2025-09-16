import PropTypes from 'prop-types';

export const Center = ({ width = '100%', height="100vh", children, className, style }) => {
  return (
    <div className={`center ${className}`} style={{width, height, style}}>
      {children}
    </div>
  )
}

Center.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  className: PropTypes. string,
  children: PropTypes.node,
  style: PropTypes.object
}