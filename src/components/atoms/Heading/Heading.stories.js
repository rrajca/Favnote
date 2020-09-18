import React from 'react';
import Heading from 'components/atoms/Heading/Heading';
import { withKnobs, text } from '@storybook/addon-knobs';

export default {
  title: 'Atoms/Heading',
  decorators: [withKnobs],
};

export const big = () => {
  const label = 'Text';
  const defaultValue = 'Heading';
  const groupId = 'GROUP-ID1';

  const value = text(label, defaultValue, groupId);
  return <Heading big>{value}</Heading>;
};

export const small = () => {
  const label = 'Text';
  const defaultValue = 'Heading';
  const groupId = 'GROUP-ID1';

  const value = text(label, defaultValue, groupId);
  return <Heading>{value}</Heading>;
};
