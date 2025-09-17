import { useEffect } from "react";
import { useFormik } from "formik";
import { useNavigate, Link } from "react-router";
import { Grid } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import PasswordIcon from "@mui/icons-material/Password";

import { validationSchema } from "./login.validation";
import { Center } from "../components/templates/center/center";
import { login } from "../server/auth.server";
import { Input, Buttons } from "../components/atoms";

export const Login = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const user = localStorage.getItem("user");
    if (user){
      const { id } = JSON.parse(user);
      navigate(`/home/${id}`);
    }
  }, [navigate]);

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      const { email, password } = values;
      login(email, password).then((result) => {
        console.log(result);
        if (result.success) {
          localStorage.setItem("user", JSON.stringify(result?.user));
          navigate(`/home/${result.user.id}`);
        } else {
          alert(result.message);
        }
      });
    },
  });

  return (
    <Center>
      <div className="box">
        <form onSubmit={formik.handleSubmit}>
          <Grid
            container
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 4, sm: 8, md: 12 }}
          >
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
