import React from 'react';
import Card from 'components/molecules/Card/Card';

export default {
  title: 'Card',
  component: Card,
};

export const note = () => {
  return <Card />;
};
export const twitter = () => {
  return <Card cardType="twitter" />;
};
export const article = () => {
  return <Card cardType="article" />;
};
