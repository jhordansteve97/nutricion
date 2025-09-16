import { useFormik } from "formik";
import { useNavigate } from "react-router";
import { Grid } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import PasswordIcon from "@mui/icons-material/Password";

import { validationSchema } from "./login.validation";
import { Input } from "../components/atoms/input";
import { Center } from "../components/templates/center";
import { Link } from "react-router";
import { Buttons } from "../components/atoms/button";
import { login } from "../server/auth.server";

export const Login = () => {
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      const { email, password } = values;
      login(email, password).then((result) => {
        if (result.success) {
          console.log(result);
          navigate(`/home/${result.user.id}`);
        } else {
          alert("no se pudo encontrar");
        }
      });
    },
  });

  return (
    <Center>
      <div className="box">
        <form onSubmit={formik.handleSubmit}>
          <Grid container spacing={2}>
            <Grid size={12}>
              <Input
                icon={<EmailIcon className="icon" />}
                id="email"
                name="email"
                label="Email"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.email && Boolean(formik.errors.email)}
                helperText={formik.touched.email && formik.errors.email}
                fullWidth
              />
            </Grid>
            <Grid size={12}>
              <Input
                icon={<PasswordIcon className="icon" />}
                id="password"
                name="password"
                label="Password"
                type="password"
                value={formik.values.password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={
                  formik.touched.password && Boolean(formik.errors.password)
                }
                helperText={formik.touched.password && formik.errors.password}
                fullWidth
              />
            </Grid>
            <Grid size={12}>
              <Link to="/registration" className="link">
                Registrar
              </Link>
            </Grid>
            <Grid size={12}>
              <Buttons fullWidth label="Entrar" />
            </Grid>
          </Grid>
        </form>
      </div>
    </Center>
  );
};
