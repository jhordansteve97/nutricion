import { useFormik } from "formik";
import PropTypes from "prop-types";
import { Button, Grid } from "@mui/material";

import { FaWeightScale } from "react-icons/fa6";
import { FaRegSave, FaAppleAlt } from "react-icons/fa";
import { GiWeightLiftingUp, GiFruitBowl } from "react-icons/gi";
import { RiHeartPulseLine } from "react-icons/ri";

import { descriptionColor, primary } from "../../../config/theme";
import { formUserJson, validationFormObjective } from "./objective.validation";
import { Radio, Title, Input, Buttons } from "../../atoms";
import { api } from "../../../server/apiFetch";

export const Objective = ({ onSubmit, id, form }) => {
  const options = [
    {
      label: "Pérdida de peso",
      value: 1,
      image: <FaWeightScale size="37px" color={descriptionColor} />,
    },
    {
      label: "Alimentación saludable",
      value: 2,
      image: <GiFruitBowl size="37px" color={descriptionColor} />,
    },
    {
      label: "Aumento de masa muscular",
      value: 3,
      image: <GiWeightLiftingUp size="37px" color={descriptionColor} />,
    },
    {
      label: "Control de enfermedades",
      value: 4,
      image: <RiHeartPulseLine size="37px" color={descriptionColor} />,
    },
  ];

  const formik = useFormik({
    initialValues: {
      weight: form?.weight || "",
      height: form?.height || "",
      idealWeight: form?.idealWeight || "",
      objective: form?.objective || "",
      weightMin: form?.weightMin || "",
      weightMax: form?.weightMax || "",
    },
    enableReinitialize: true,
    validationSchema: validationFormObjective,
    onSubmit: (objective) => {
      api
        .post(`/medicalData`, {
          id: id,
          idUser: id,
          objective
        })
        .then((data) => {
          if (data.error) {
            alert("No se pudo registrar");
          } else {
            onSubmit();
          }
        });
    },
  });

  const getGridSize = (index, id) => {
    if (index < 3) return 4;
    if (id === "objective") return 12;
    return 6;
  };

  return (
    <div>
      <Title
        label="Objetivos"
        icon={<FaAppleAlt size="24px" color={primary} />}
      />
      <br />
      <form onSubmit={formik.handleSubmit}>
        <Grid
          container
          spacing={{ xs: 2, md: 6 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {formUserJson.map((item, index) => (
            <Grid size={getGridSize(index, item.id)} key={item.id}>
              {item.id === "objective" ? (
                <Radio
                  name={item.id}
                  label={item.label}
                  options={options}
                  value={formik.values[item.id]}
                  onChange={(val) => formik.setFieldValue("objective", val)}
                  onBlur={formik.handleBlur}
                />
              ) : (
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
                    formik.touched[item.id] && Boolean(formik.errors[item.id])
                  }
                  helperText={formik.touched[item.id] && formik.errors[item.id]}
                  focused={formik.values[item.id]}
                  fullWidth
                />
              )}
            </Grid>
          ))}
          <Grid sx={{ marginTop: "20px" }} size={12} className="center">
            <Buttons label={"Continuar"} />
          </Grid>
          <Grid sx={{ marginTop: "-140px" }} size={4} className="center">
            <div>
              <p style={{ margin: 0, color: "#686767", fontSize: "14px" }}>
                Deseo continuar despues
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
  );
};

Objective.propTypes = {
  onSubmit: PropTypes.func,
  id: PropTypes.string,
  form: PropTypes.object
};
