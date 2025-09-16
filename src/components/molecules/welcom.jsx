import PropTypes from "prop-types";
import avatar from "../../assets/avatar.jpg";
export const Welcom = ({ name, confirm }) => {
  return (
    <div className="grid-container-Welcome">
      <div className="grid-avatar">
        <img src={avatar} alt="Avatar" className="avatar-photo" />
      </div>
      {!confirm &&<div className="subtitle">!Bienvenido</div>}
      <div className={confirm ? "titleText" :  "title"}>{name}</div>
      {confirm && <div className="description">
        Para brindarte una mejor atencion, contesta siguientes preguntas. La
        informacion es confidencial y esencial para crear tu perfil y que
        recibas la mejor atencion.
      </div>}
    </div>
  );
};

Welcom.propTypes = {
  name: PropTypes.string,
  confirm: PropTypes.bool
};
