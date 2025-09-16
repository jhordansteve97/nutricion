import * as yup from "yup";

export const validationSchemaRegistration = yup.object({
  name: yup
    .string("Por favor agrega tu nombre completo")
    .required("El nombre completo es obligatorio"),
  age: yup
    .string("Por favor agrega tu edad")
    .required("La edad es obligatoria"),
  email: yup
    .string("Por favor agrega un correo electrónico")
    .email("Tiene que ser un correo electrónico")
    .required("El correo electrónico es obligatorio"),
  phone: yup
    .number("Por favor agrega tu número telefónico")
    .min(10, "minimo son 10 digitos")
    .required("El número es obligatoria"),
  job: yup
    .string("Por favor agrega lugar de trabajo")
    .required("El lugar de trabajo es obligatorio"),
  password: yup
    .string("Ingresa una contraseña")
    .min(8, "minimo son 8 digitos")
    .required("La contraseña es obligatoria"),
});

export const validationSchemaUser = yup.object({
  name: yup
    .string("Por favor agrega tu nombre completo")
    .required("El nombre completo es obligatorio"),
  age: yup
    .string("Por favor agrega tu edad")
    .required("La edad es obligatoria"),
  email: yup
    .string("Por favor agrega un correo electrónico")
    .email("Tiene que ser un correo electrónico")
    .required("El correo electrónico es obligatorio"),
  phone: yup
    .number("Por favor agrega tu número telefónico")
    .min(10, "minimo son 10 digitos")
    .required("El número es obligatoria"),
  job: yup
    .string("Por favor agrega lugar de trabajo")
    .required("El lugar de trabajo es obligatorio"),
});
