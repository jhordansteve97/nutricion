import * as yup from "yup";

export const validationSchema = yup.object({
  email: yup
    .string("Ingresa un correo electrónico")
    .email("Tiene que ser un correo electrónico")
    .required("El correo electrónico es obligatorio"),
  password: yup
    .string("Ingresa una contraseña")
    .min(8, "minimo son 8 digitos")
    .required("La contraseña es obligatoria"),
});