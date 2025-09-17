import { useMemo } from "react";
import PropTypes from "prop-types";
import { useFormik, FieldArray, FormikProvider } from "formik";
import { Button, Grid, Tooltip } from "@mui/material";
import dayjs from "dayjs";

import { FaRegSave } from "react-icons/fa";
import { FaUserDoctor } from "react-icons/fa6";
import { RiDeleteBin6Line } from "react-icons/ri";
import { IoIosAddCircleOutline } from "react-icons/io";

import { primary } from "../../../config/theme";
import { api } from "../../../server/apiFetch";

import {
  formHistoryJson,
  optionsRadio,
  optionsRelatives,
  validationFormObjective,
} from "./medicalHistory.validation";

import {
  InputDate,
  RadioGroupButton,
  Title,
  Input,
  Buttons,
  SelectForm,
} from "../../atoms";

export const MedicalHistory = ({ onSubmit, idParams, form, data }) => {
  const initialValues = useMemo(
    () => ({
      relatives: form?.relatives || [{ name: "", relation: "" }],
      suffering: form?.suffering || "",
      whichSuffering: form?.whichSuffering || "",
      allergy: form?.allergy || "",
      whichAllergy: form?.whichAllergy || "",
      surgery: form?.surgery || "",
      whichSurgery: form?.whichSurgery || "",
      diet: form?.diet || "",
      whichDiet: form?.whichDiet || "",
      medications: form?.medications || "",
      whichMedications: form?.whichMedications || "",
      reductiveTreatments: form?.reductiveTreatments || "",
      whichReductiveTreatments: form?.whichReductiveTreatments || "",
      supplements: form?.supplements || "",
      whichSupplements: form?.whichSupplements || "",
      medicalStudies: form?.medicalStudies || "",
      whichMedicalStudies: form?.whichMedicalStudies || "",
      date: form?.date ? dayjs(form.date) : dayjs(),
    }),
    [form]
  );

  const formik = useFormik({
    initialValues,
    enableReinitialize: true,
    validationSchema: validationFormObjective,
    onSubmit: (values) => {
      const { id, idUser, objective } = data;
      const dataMedicalHistory = {
        id,
        idUser,
        objective,
        medicalHistory: {
          ...values,
          date: values.date?.format("YYYY-MM-DD"),
        },
      };
      api.put(`/medicalData/${idParams}`, dataMedicalHistory).then((data) => {
        if (data.error) {
          alert("No se pudo registrar");
        } else {
          onSubmit();
        }
      });
    },
  });

  return (
    <FormikProvider value={formik}>
      <div>
        <br />
        <Title
          label="Historial médico"
          icon={<FaUserDoctor size="24px" color={primary} />}
        />
        <br />
        <form onSubmit={formik.handleSubmit}>
          <Grid
            container
            spacing={{ xs: 2, md: 6 }}
            columns={{ xs: 4, sm: 8, md: 12 }}
          >
            {formHistoryJson.map((component, index) => {
              if (component.type === "date") {
                return (
                  <Grid item size={4} key={component.id}>
                    <InputDate
                      label={component.label}
                      value={formik.values[component.id]}
                      onChange={(date) =>
                        formik.setFieldValue(component.id, date)
                      }
                    />
                  </Grid>
                );
              }

              if (index === 4) {
                return (
                  <Grid key="relatives" size={12}>
                    <FieldArray
                      name="relatives"
                      render={({ push, remove }) => (
                        <div>
                          ¿Algún familiar directo ha sufrido alguna afección
                          médica como enfermedades del corazón, cáncer, diabetes
                          u otro padecimiento crónico ?
                          <div className="center">
                            <div>
                              {formik.values.relatives.map((rel, idx) => (
                                <Grid key={idx} container spacing={2} mb={2}>
                                  <Grid item xs={6}>
                                    <SelectForm
                                      id={`relatives[${idx}].relation`}
                                      name={`relatives[${idx}].relation`}
                                      label="Parentesco familiar"
                                      options={optionsRelatives}
                                      value={rel.relation}
                                      onChange={formik.handleChange}
                                      onBlur={formik.handleBlur}
                                      error={
                                        formik.touched.relatives?.[idx]
                                          ?.relation &&
                                        Boolean(
                                          formik.errors.relatives?.[idx]
                                            ?.relation
                                        )
                                      }
                                      helperText={
                                        formik.touched.relatives?.[idx]
                                          ?.relation &&
                                        formik.errors.relatives?.[idx]?.relation
                                      }
                                      fullWidth
                                    />
                                  </Grid>
                                  <Grid item xs={6}>
                                    <Input
                                      id={`relatives[${idx}].name`}
                                      name={`relatives[${idx}].name`}
                                      label="Nombre del pariente"
                                      value={rel.name}
                                      onChange={formik.handleChange}
                                      onBlur={formik.handleBlur}
                                      error={
                                        formik.touched.relatives?.[idx]?.name &&
                                        Boolean(
                                          formik.errors.relatives?.[idx]?.name
                                        )
                                      }
                                      helperText={
                                        formik.touched.relatives?.[idx]?.name &&
                                        formik.errors.relatives?.[idx]?.name
                                      }
                                      fullWidth
                                    />
                                  </Grid>
                                  <Grid item xs={12}>
                                    <Button
                                      type="button"
                                      color="error"
                                      onClick={() => remove(idx)}
                                      disabled={
                                        formik.values.relatives.length === 1
                                      }
                                    >
                                      <RiDeleteBin6Line
                                        color="#FF0000"
                                        size="25px"
                                      />
                                    </Button>
                                  </Grid>
                                </Grid>
                              ))}
                              <div className="center">
                                <Tooltip title="Agregar pariente">
                                  <Button
                                    type="button"
                                    onClick={() =>
                                      push({ name: "", relation: "" })
                                    }
                                  >
                                    <IoIosAddCircleOutline
                                      color={primary}
                                      size="25px"
                                    />
                                  </Button>
                                </Tooltip>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                    />
                  </Grid>
                );
              }

              if (component.length === 2) {
                return (
                  <Grid item size={4} key={index}>
                    {component.map((item) => (
                      <div key={item.id}>
                        {item.type === "radio" && (
                          <RadioGroupButton
                            id={item.id}
                            name={item.id}
                            label={item.label}
                            options={optionsRadio}
                            value={formik.values[item.id]}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            error={
                              formik.touched[item.id] &&
                              Boolean(formik.errors[item.id])
                            }
                            helperText={
                              formik.touched[item.id] && formik.errors[item.id]
                            }
                          />
                        )}
                        {item.type === "text" &&
                          formik.values[item?.valid] === "1" && (
                            <Input
                              icon={item.icon}
                              id={item.id}
                              name={item.id}
                              type={item.type}
                              label={item.label}
                              adornments={item?.adornments}
                              value={formik.values[item.id]}
                              onChange={formik.handleChange}
                              onBlur={formik.handleBlur}
                              error={
                                formik.touched[item.id] &&
                                Boolean(formik.errors[item.id])
                              }
                              helperText={
                                formik.touched[item.id] &&
                                formik.errors[item.id]
                              }
                              focused={formik.values[item.id]}
                              fullWidth
                            />
                          )}
                      </div>
                    ))}
                  </Grid>
                );
              }

              return null;
            })}

            <Grid item size={12} className="center button-submit">
              <Buttons label="Continuar" />
            </Grid>

            <Grid item  size={{ xs: 12, sm: 12, md: 4 }} className="center button-save">
              <div>
                <p style={{ margin: 0, color: "#686767", fontSize: "14px" }}>
                  Deseo continuar después
                </p>
                <Button
                  type="submit"
                  sx={{ textTransform: "none" }}
                  color="secondary"
                  variant="text"
                >
                  <FaRegSave />
                  &nbsp; Guardar mi avance
                </Button>
              </div>
            </Grid>
          </Grid>
        </form>
      </div>
    </FormikProvider>
  );
};

MedicalHistory.propTypes = {
  onSubmit: PropTypes.func,
  idParams: PropTypes.string,
  form: PropTypes.array,
  data: PropTypes.object,
};
