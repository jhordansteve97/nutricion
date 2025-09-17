import { fn } from "storybook/test";

import { SelectForm } from "./select";

const options = [
  { value: 1, label: "option 1" },
  { value: 2, label: "option 2" },
];

export default {
  title: "Atoms/SelectForm",
  component: SelectForm,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: { onChange: fn() },
};

export const Default = {
  args: {
    label: "Family relationship",
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