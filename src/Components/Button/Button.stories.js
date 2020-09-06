import React from 'react';
import Button from 'Components/Button/Button';
import { withKnobs, select } from '@storybook/addon-knobs';

export default {
  title: 'Button',
  decorators: [withKnobs],
};

export const primary = () => {
  const label = 'Colors';
  const options = {
    Primary: 'hsl(49, 100%, 58%)',
    Secondary: 'hsl(196, 83%, 75%)',
    Tertiary: 'hsl(106, 47%, 64%)',
  };
  const defaultValue = 'hsl(49, 100%, 58%)';
  const groupId = 'GROUP-ID1';

  const value = select(label, options, defaultValue, groupId);
  return <Button color={value}>Hello Roman</Button>;
};
export const secondary = () => <Button secondary>Hello Roman</Button>;
