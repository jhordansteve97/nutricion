import { useFormik } from "formik";
import { FormUser } from "../index";
import { validationSchemaUser } from "../formUser/formUser.validation";
import { api } from "../../../server/apiFetch";
import PropTypes from "prop-types";

export const UserDataForm = ({ onSubmit, user, id }) => {

  const formik = useFormik({
    initialValues: {
      name: user?.name || "",
      age: user?.age || "",
      email: user?.email || "",
      phone: user?.phone || "",
      job: user?.job || "",
    },
    enableReinitialize: true,
    validationSchema: validationSchemaUser,
    onSubmit: (values) => {
      const { name, age, email, phone, job } = values;
      api
        .put(`/users/${id}`, {
          name,
          age,
          email,
          phone,
          job,
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
  return (
    <div className="center container-home">
      <div className="containerForm">
        <p>Para comenzar, ayúdanos a verificar tus datos.</p>
        <FormUser formik={formik} label="Continuar" />
      </div>
    </div>
  );
};

UserDataForm.propTypes = {
  id: PropTypes.string,
  user: PropTypes.object,
  onSubmit: PropTypes.func
}