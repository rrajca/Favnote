import React from 'react';
import Input from 'components/atoms/Input/Input';

export default {
  title: 'Atoms/Input',
  component: Input,
};

export const input = () => {
  return <Input type="text" placeholder="login" />;
};
export const search = () => {
  return <Input type="text" placeholder="search" search />;
};
