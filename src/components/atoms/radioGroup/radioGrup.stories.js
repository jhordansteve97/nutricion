import { fn } from "storybook/test";

import { RadioGroupButton } from "./radioGroup";

const options = [
  { value: 1, label: "Si" },
  { value: 2, label: "No" },
];

export default {
  title: "Atoms/RadioGroupButton",
  component: RadioGroupButton,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: { onChange: fn() },
};

export const Default = {
  args: {
    label: "Radio",
    options
  },
};

export const Error = {
  args: {
    label: "Error",
    options,
    error: true,
    helperText: "Mensaje de error"
  },
};
