import * as yup from "yup";

export const formUserJson = [
  {
    id: "weight",
    label: "¿Cuál es tu peso?",
    type: "number",
    adornments: "Kg",
  },
  {
    id: "height",
    label: "¿Cuánto mides?",
    type: "number",
    adornments: "cm",
  },
  {
    id: "idealWeight",
    label: "¿Cuál es tu peso ideal?",
    type: "number",
    adornments: "Kg",
  },
  {
    id: "objective",
    label: "¿Que buscas al mejorar tu alimentación?",
    type: "number",
  },
  {
    id: "weightMin",
    label: "¿Cuál ha sido tu peso minimo en los ultimos 5 años?",
    type: "number",
    adornments: "Kg",
  },
  {
    id: "weightMax",
    label: "¿Cuál ha sido tu peso maximo en los ultimos 5 años?",
    type: "number",
    adornments: "Kg",
  },
];

export const validationFormObjective = yup.object({
  weight: yup
    .number("Por favor agrega tu peso")
    .min(50, "minimo son 50 kg")
    .max(200, "minimo son 200 kg")
    .required("El campo es obligatorio"),
  height: yup
    .number("Por favor agrega tu altura")
    .min(50, "minimo son 50 cm")
    .max(230, "minimo son 230cm")
    .required("El campo es obligatorio"),
  idealWeight: yup
    .number("Por favor agrega tu peso ideal")
    .min(50, "minimo son 50 kg")
    .max(200, "minimo son 200 kg")
    .required("El campo es obligatorio"),
  objective: yup
    .number("Por favor agrega tu peso ideal")
    .required("El campo es obligatorio"),
  weightMin: yup
    .number("Por favor agrega tu peso minimo")
    .min(50, "minimo son 50 kg")
    .max(200, "minimo son 200 kg")
    .required("El campo es obligatorio"),
  weightMax: yup
    .number("Por favor agrega tu peso maximo")
    .min(50, "minimo son 50 kg")
    .max(200, "minimo son 200 kg")
    .required("El campo es obligatorio"),
});
