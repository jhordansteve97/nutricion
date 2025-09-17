import { useEffect, useState } from "react";
import { useFormik } from "formik";
import { useNavigate } from "react-router";


import { api } from "../server/apiFetch";
import { validationSchemaRegistration } from "../components/templates/formUser/formUser.validation";
import { Center, FormUser } from "../components/templates";



export const Registration = () => {
  const navigate = useNavigate();
  const [count, setCount] = useState(0);

  useEffect(() => {
    const user = localStorage.getItem("user");
    if (user){
      const { id } = JSON.parse(user);
      navigate(`/home/${id}`);
    }
  }, [navigate]);

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
          console.log({data});
          if (data.error) {
            alert("No se pudo registrar");
          } else {
            navigate(`/`);
          }
        })
    },
  });

  return (
    <Center>
      <div className="box containerForm">
        <FormUser formik={formik} label="Registrar" isRegister />
      </div>
    </Center>
  );
};
