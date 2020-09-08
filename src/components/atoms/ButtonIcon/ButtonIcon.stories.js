import React from 'react';
import styled from 'styled-components';
import ButtonIcon from 'components/atoms/ButtonIcon/ButtonIcon';

import lightIcon from 'assets/icons/light.svg';
import logoutIcon from 'assets/icons/logout.svg';
import pencilIcon from 'assets/icons/pencil.svg';
import twitterIcon from 'assets/icons/twitter.svg';

const Background = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 400px;
  height: 400px;
  background-color: ${({ theme }) => theme.primary};
`;

export default {
  title: 'ButtonIcon',
  component: ButtonIcon,
  decorators: [
    Story => (
      <Background>
        <Story />
      </Background>
    ),
  ],
};

export const light = () => {
  return <ButtonIcon icon={lightIcon} />;
};
export const lightActive = () => {
  return <ButtonIcon icon={lightIcon} active />;
};
export const logout = () => {
  return <ButtonIcon icon={logoutIcon} />;
};
export const pencil = () => {
  return <ButtonIcon icon={pencilIcon} />;
};
export const twitter = () => {
  return <ButtonIcon icon={twitterIcon} />;
};
export const twitterActive = () => {
  return <ButtonIcon icon={twitterIcon} active />;
};
