import { fn } from 'storybook/test';

import { Input } from './input';

export default {
  title: 'Atoms/Input',
  component: Input,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: { onChange: fn() },
};

export const Default = {
  args: {
    label: 'Nombre',
  },
};

export const Adornments = {
  args: {
    label: 'Peso',
    adornments: 'Kg',
  },
};