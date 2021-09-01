import Button from './button';
import React from 'react';

export default {
  title: 'Button',
  component: Button,
};

const Template = args => <Button {...args} />;

export const ButtonExample = Template.bind({});
ButtonExample.args = {
  children: 'Iniciar sesión',
  buttonId: 'buttonLogin',
  onClick: undefined,
  disabled: false,
  type: 'primary',
};
