export const optionsRadio = [
  { value: 1, label: "Si" },
  { value: 2, label: "No" },
];

export const optionsRelatives = [
  { value: 1, label: "Madre" },
  { value: 2, label: "Padre" },
  { value: 3, label: "Hermano" },
  { value: 4, label: "Hermana" },
  { value: 5, label: "Abuelo Materno" },
  { value: 6, label: "Abuelo Paterno" },
  { value: 7, label: "Abuela Materno" },
  { value: 8, label: "Abuela Paterno" },
  { value: 9, label: "Tio Materno" },
  { value: 10, label: "Tio Paterno" },
  { value: 11, label: "Tia Materno" },
  { value: 12, label: "Tia Paterno" },
]

export const formHistoryJson = [
  [
    {
      id: "suffering",
      label: "¿Padeces alguna enfermedad o afectación médica?",
      type: "radio",
    },
    {
      id: "whichSuffering",
      label: "",
      type: "text",
      valid: "suffering",
    },
  ],
  [
    {
      id: "allergy",
      label: "¿Tienes alguna alergia?",
      type: "radio",
    },
    {
      id: "whichAllergy",
      label: "",
      type: "text",
      valid: "allergy",
    },
  ],
  [
    {
      id: "surgery",
      label: "¿Te han hecho alguna cirugía?",
      type: "radio",
    },
    {
      id: "whichSurgery",
      label: "",
      type: "text",
      valid: "surgery",
    },
  ],
  {
    id: "date",
    label: "Fecha",
    type: "date",
  },
  {},
  [
    {
      id: "diet",
      label: "¿Has hecho dieta para bajar de peso?",
      type: "radio",
    },
    {
      id: "whichDiet",
      label: "",
      type: "text",
      valid: "diet",
    },
  ],
  [
    {
      id: "medications",
      label: "¿Has tomado medicamentos para bajar de peso?",
      type: "radio",
    },
    {
      id: "whichMedications",
      label: "",
      type: "text",
      valid: "medications",
    },
  ],
  [
    {
      id: "reductiveTreatments",
      label: "¿Has tomado tratamientos reductivos anteriormente?",
      type: "radio",
    },
    {
      id: "whichReductiveTreatments",
      label: "",
      type: "text",
      valid: "reductiveTreatments",
    },
  ],
  [
    {
      id: "supplements",
      label: "¿Utilizas algún suplemento o tomas vitaminas de manera regular?",
      type: "radio",
    },
    {
      id: "whichSupplements",
      label: "",
      type: "text",
      valid: "supplements",
    },
  ],
  [
    {
      id: "medicalStudies",
      label: "¿Te has realizado estudio médicos recientes?",
      type: "radio",
    },
    {
      id: "whichMedicalStudies",
      label: "",
      type: "text",
      valid: "medicalStudies",
    },
  ],
];

import * as Yup from "yup";

export const validationFormObjective = Yup.object({
  suffering: Yup.string().required("Campo requerido"),
  whichSuffering: Yup.string().when("suffering", {
    is: "1",
    then: (schema) => schema.required("Especifica cuál sufrimiento"),
    otherwise: (schema) => schema.notRequired(),
  }),

  allergy: Yup.string().required("Campo requerido"),
  whichAllergy: Yup.string().when("allergy", {
    is: "1",
    then: (schema) => schema.required("Especifica cuál alergia"),
    otherwise: (schema) => schema.notRequired(),
  }),

  surgery: Yup.string().required("Campo requerido"),
  whichSurgery: Yup.string().when("surgery", {
    is: "1",
    then: (schema) => schema.required("Especifica cuál cirugía"),
    otherwise: (schema) => schema.notRequired(),
  }),

  diet: Yup.string().required("Campo requerido"),
  whichDiet: Yup.string().when("diet", {
    is: "1",
    then: (schema) => schema.required("Especifica cuál dieta"),
    otherwise: (schema) => schema.notRequired(),
  }),

  medications: Yup.string().required("Campo requerido"),
  whichMedications: Yup.string().when("medications", {
    is: "1",
    then: (schema) => schema.required("Especifica cuáles medicamentos"),
    otherwise: (schema) => schema.notRequired(),
  }),

  reductiveTreatments: Yup.string().required("Campo requerido"),
  whichReductiveTreatments: Yup.string().when("reductiveTreatments", {
    is: "1",
    then: (schema) => schema.required("Especifica cuál tratamiento"),
    otherwise: (schema) => schema.notRequired(),
  }),

  supplements: Yup.string().required("Campo requerido"),
  whichSupplements: Yup.string().when("supplements", {
    is: "1",
    then: (schema) => schema.required("Especifica cuáles suplementos"),
    otherwise: (schema) => schema.notRequired(),
  }),

  medicalStudies: Yup.string().required("Campo requerido"),
  whichMedicalStudies: Yup.string().when("medicalStudies", {
    is: "1",
    then: (schema) => schema.required("Especifica cuáles estudios médicos"),
    otherwise: (schema) => schema.notRequired(),
  }),

});
