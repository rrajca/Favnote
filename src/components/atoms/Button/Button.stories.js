import React from 'react';
import Button from 'components/atoms/Button/Button';
import { withKnobs, select } from '@storybook/addon-knobs';

export default {
  title: 'Button',
  decorators: [withKnobs],
};

export const primary = () => {
  const label = 'Colors';
  const options = ['note', 'twitter', 'article'];
  const defaultValue = 'note';
  const groupId = 'GROUP-ID1';

  const value = select(label, options, defaultValue, groupId);
  return <Button activeColor={value}>Hello Roman</Button>;
};
export const secondary = () => <Button secondary>Hello Roman</Button>;
