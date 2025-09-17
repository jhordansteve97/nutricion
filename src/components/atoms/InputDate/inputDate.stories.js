import { fn } from 'storybook/test';

import { InputDate } from './inputDate';

export default {
  title: 'Atoms/InputDate',
  component:  InputDate,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: { onChange: fn() },
};

export const Default = {
  args: {
    label: 'Fecha',
  },
};