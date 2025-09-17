import { fn } from "storybook/test";
import { Radio } from "./radio";

const options = [
  {
    label: "Weight loss",
    value: 1,
    image: "Icono",
  },
  {
    label: "Healthy eating",
    value: 2,
    image: "Icono",
  },
];

export default {
  title: "Atoms/Radio",
  component: Radio,
  tags: ["autodocs"],
  args: { onChange: fn() },
};

export const Default = {
  args: {
    label: "Nombre",
    options, // ✅ aquí va el array directamente
  },
};
