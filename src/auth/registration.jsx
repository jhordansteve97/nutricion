import { useEffect, useState } from "react";
import { useFormik } from "formik";
import { useNavigate } from "react-router";


import { api } from "../server/apiFetch";

import { validationSchemaRegistration } from "../components/templates/formUser.validation";
import { Center } from "../components/templates/center";
import { FormUser } from "../components/templates/formUser";



export const Registration = () => {
  const navigate = useNavigate();
  const [count, setCount] = useState(0);
  useEffect(() => {
    api.get("/users").then((data) => setCount(data.data.length + 1));
  }, []);

  const formik = useFormik({
    initialValues: {
      name: "",
      age: "",
      email: "",
      phone: "",
      job: "",
    },
    validationSchema: validationSchemaRegistration,
    onSubmit: (values) => {
      const { name, age, email, phone, job, password } = values;
      api
        .post("/users", { id: count.toString(), name, age, email, phone, job, password })
        .then((data) => {
          if (data.error) {
            alert("No se pudo registrar");
          } else {
            navigate(`/home/${data.data.id}`);
          }
        })
    },
  });

  return (
    <Center>
      <div className="box" style={{width: '80%'}}>
        <FormUser formik={formik} label="Registrar" isRegister />
      </div>
    </Center>
  );
};
