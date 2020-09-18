import React from 'react';
import StoryRouter from 'storybook-react-router';
import Sidebar from 'components/organisms/Sidebar/Sidebar';

export default {
  title: 'Organisms/Sidebar',
  component: Sidebar,
  decorators: [StoryRouter()],
};

export const normal = () => {
  return <Sidebar />;
};
