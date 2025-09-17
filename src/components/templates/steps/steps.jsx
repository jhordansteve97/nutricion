import PropTypes from "prop-types";

import { useEffect, useState } from "react";
import { api } from "../../../server/apiFetch";

import { Objective, MedicalHistory } from "../index";

const Content = ({ step, onSubmit, id }) => {
  const [form, setForm] = useState(null);

  useEffect(() => {
    api.get(`/medicalData/${id}`).then((res) => setForm(res.data));
  }, [id]);

  switch (step) {
    case 0:
      return <Objective onSubmit={onSubmit} id={id} form={form?.objective} data={form} />;
    case 1:
      return <MedicalHistory onSubmit={onSubmit} idParams={id} form={form?.medicalHistory} data={form} /> ;
    default:
      return <Objective onSubmit={onSubmit} />;
  }
};

export const Steps = ({ step, onSubmit, id }) => {
  return (
    <div className="center">
      <div className="containerForm">
        <Content step={step} onSubmit={onSubmit} id={id} />
      </div>
    </div>
  );
};

const props = {
  step: PropTypes.number,
  onSubmit: PropTypes.func,
  id: PropTypes.string
};

Steps.propTypes = props;

Content.propTypes = props;