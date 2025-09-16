import PropTypes from "prop-types";

import { Grid } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import PersonAddAltIcon from "@mui/icons-material/PersonAddAlt";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import WorkIcon from "@mui/icons-material/Work";
import PasswordIcon from "@mui/icons-material/Password";

import { Input } from "../atoms/input";
import { Buttons } from "../atoms/button";

export const FormUser = ({ isRegister = false, label, formik }) => {

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <Grid container spacing={2}>
          <Grid size={6}>
            <Input
              icon={<PersonAddAltIcon className="icon" />}
              id="name"
              name="name"
              label="Nombre completo"
              value={formik.values.name}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.name && Boolean(formik.errors.name)}
              helperText={formik.touched.name && formik.errors.name}
              focused
            />
          </Grid>
          <Grid size={6}>
            <Input
              icon={<PersonOutlineIcon className="icon" />}
              id="age"
              name="age"
              label="Edad"
              type="number"
              value={formik.values.age}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.age && Boolean(formik.errors.age)}
              helperText={formik.touched.age && formik.errors.age}
              focused
            />
          </Grid>
          <Grid size={6}>
            <Input
              icon={<EmailIcon className="icon" />}
              id="email"
              name="email"
              label="Correo"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email}
              focused
            />
          </Grid>
          <Grid size={6}>
            <Input
              icon={<LocalPhoneIcon className="icon" />}
              id="phone"
              name="phone"
              type="phone"
              label="Número telefónico"
              value={formik.values.phone}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.phone && Boolean(formik.errors.phone)}
              helperText={formik.touched.phone && formik.errors.phone}
              focused
            />
          </Grid>
          <Grid size={6}>
            <Input
              icon={<WorkIcon className="icon" />}
              id="job"
              name="job"
              label="Lugar de trabajo"
              value={formik.values.job}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.job && Boolean(formik.errors.job)}
              helperText={formik.touched.job && formik.errors.job}
              focused
            />
          </Grid>
          <Grid size={6}>
            {isRegister && <Input
              icon={<PasswordIcon className="icon" />}
              id="password"
              name="password"
              label="Password"
              type="password"
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.password && Boolean(formik.errors.password)}
              helperText={formik.touched.password && formik.errors.password}
              focused
            />}
          </Grid>
          <Grid sx={{marginTop: '70px'}} size={12} className="center">
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