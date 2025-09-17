import { useState } from "react";

export const useForm = () => {
  const localStep = localStorage.getItem("step") || 0;
  const [confirm, setConfirm] = useState(JSON.parse(localStorage.getItem("confirmData")));
  const [step, setStep] = useState(parseInt(localStep));

  const setConfirmData = (value) => {
    setConfirm(value);
    localStorage.setItem("confirmData", JSON.stringify(value));
  };

  const setSteps = (value) => {
    setStep(value);
    localStorage.setItem("step", value);
  }

  return {
    confirm,
    setConfirmData,
    step,
    setSteps,
  };
};
