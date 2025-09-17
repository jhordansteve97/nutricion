import { fn } from 'storybook/test';

import { Title } from './title';

export default {
  title: 'Atoms/Title',
  component: Title,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: { onchange: fn() },
};

export const Default = {
  args: {
    label: 'Nombre',
  },
};
