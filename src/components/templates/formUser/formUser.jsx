import PropTypes from "prop-types";
import { Grid } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import PersonAddAltIcon from "@mui/icons-material/PersonAddAlt";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import WorkIcon from "@mui/icons-material/Work";
import PasswordIcon from "@mui/icons-material/Password";

import { Input, Buttons } from "../../atoms";

export const FormUser = ({ isRegister = false, label, formik }) => {

  const formUserJson = [
    {
      id: 'name',
      label: 'Nombre completo',
      icon: <PersonAddAltIcon className="icon" />,
      type: 'text',
    },
    {
      id: 'age',
      label: 'Edad',
      icon: <PersonOutlineIcon className="icon" />,
      type: 'text',
    },
    {
      id: 'email',
      label: 'Correo electrónico',
      icon: <EmailIcon className="icon" />,
      type: 'email',
    },
    {
      id: 'phone',
      label: 'Número telefónico',
      icon: <LocalPhoneIcon className="icon" />,
      type: 'phone',
    },
    {
      id: 'job',
      label: 'Lugar de trabajo',
      icon: <WorkIcon className="icon" />,
      type: 'text',
    },
  ];

  if (isRegister) {
    formUserJson.push({
      id: 'password',
      label: 'Contraseña',
      icon: <PasswordIcon className="icon" />,
      type: 'password',
    });
  }
  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 12, sm: 12, md: 12 }}>
          {formUserJson.map((item) =>
            <Grid size={{ xs: 12, sm: 6, md: 6 }} key={item.id}>
              <Input
                icon={item.icon}
                id={item.id}
                name={item.id}
                type={item.type}
                label={item.label}
                value={formik.values[item.id]}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched[item.id] && Boolean(formik.errors[item.id])}
                helperText={formik.touched[item.id] && formik.errors[item.id]}
                focused={formik.values[item.id]}
                fullWidth
              />
            </Grid>
          )}
          <Grid sx={{margin: '70px 0'}} size={12} className="center">
            <Buttons label={label} />
          </Grid>
        </Grid>
      </form>
    </div>
  );
};

FormUser.propTypes = {
  isRegister: PropTypes.bool,
  label: PropTypes.string,
  formik: PropTypes.shape({
    values: PropTypes.object.isRequired,
    handleChange: PropTypes.func.isRequired,
    handleSubmit: PropTypes.func.isRequired,
    handleBlur: PropTypes.func,
    touched: PropTypes.object,
    errors: PropTypes.object,
  }).isRequired,
}