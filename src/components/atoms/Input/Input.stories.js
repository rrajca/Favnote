import React from 'react';
import Input from 'components/atoms/Input/Input';
import { withKnobs } from '@storybook/addon-knobs';

export default {
  title: 'Input',
  decorators: [withKnobs],
};

export const input = () => {
  return <Input type="text" placeholder="login" />;
};
export const search = () => {
  return <Input type="text" placeholder="search" search />;
};
