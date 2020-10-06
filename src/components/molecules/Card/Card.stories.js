import React from 'react';
import Card from 'components/molecules/Card/Card';

export default {
  title: 'Molecules/Card',
  component: Card,
};

export const note = () => {
  return <Card />;
};
export const twitter = () => {
  return <Card cardType="twitters" />;
};
export const article = () => {
  return <Card cardType="articles" />;
};
