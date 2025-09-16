import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { useFormik } from "formik";


import { FormUser } from "./formUser";
import { validationSchemaUser } from "./formUser.validation";
import { api } from "../../server/apiFetch";
import PropTypes from "prop-types";

export const UserData = ({ onSubmit }) => {
  const params = useParams();
  const [user, setUser] = useState(null);
  useEffect(() => {
    api.get(`/users/${params.id}`).then((res) => setUser(res.data));
  }, [params]);

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
        .put(`/users/${params.id}`, {
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
      <div style={{ width: "700px" }}>
        <p>Para comenzar, ayúdanos a verificar tus datos.</p>
        <FormUser formik={formik} label="Continuar" />
      </div>
    </div>
  );
};

UserData.propTypes = {
  onSubmit: PropTypes.func
}