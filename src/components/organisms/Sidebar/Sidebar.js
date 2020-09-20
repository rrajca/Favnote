import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import styled, { css } from 'styled-components';

import ButtonIcon from 'components/atoms/ButtonIcon/ButtonIcon';

import logo from 'assets/logo.svg';
import pencilIcon from 'assets/icons/pencil.svg';
import twitterIcon from 'assets/icons/twitter.svg';
import lightIcon from 'assets/icons/light.svg';
import logoutIcon from 'assets/icons/logout.svg';

const StyledWrapper = styled.nav`
  position: fixed;
  left: 0;
  top: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 58px 40px 35px;
  width: 153px;
  height: 100vh;
  background-color: ${({ theme, activeColor }) => theme[activeColor]};
`;

const StyledLogo = styled(NavLink)`
  display: block;
  margin-bottom: 12vh;
  width: 72px;
  height: 45px;
  background-image: url(${logo});
  background-position: center center;
  background-size: contain;
  background-repeat: no-repeat;
`;

const StyledLinksList = styled.ul`
  display: flex;
  flex-direction: column;
  padding: 0;
  margin: 0;
  list-style-type: none;
`;

const StyledLinkItem = styled(ButtonIcon)`
  margin-bottom: 30px;
  background-size: ${({ light }) => (light ? '40%' : '55%')};

  ${({ smaller }) =>
    smaller &&
    css`
      background-size: 40%;
    `}
`;

const StyledLogoutButton = styled(ButtonIcon)`
  margin-top: auto;
  background-size: 80%;
`;

const Sidebar = ({ pageType }) => {
  return (
    <StyledWrapper activeColor={pageType}>
      <StyledLogo as={NavLink} exact to="/" />
      <StyledLinksList>
        <li>
          <StyledLinkItem as={NavLink} exact to="/" icon={pencilIcon} />
        </li>
        <li>
          <StyledLinkItem as={NavLink} to="/twitters" icon={twitterIcon} />
        </li>
        <li>
          <StyledLinkItem as={NavLink} to="/articles" icon={lightIcon} light="true" />
        </li>
      </StyledLinksList>
      <StyledLogoutButton as={NavLink} to="/login" icon={logoutIcon} />
    </StyledWrapper>
  );
};

export default Sidebar;

Sidebar.propTypes = {
  pageType: PropTypes.oneOf(['note', 'twitter', 'article']),
};

Sidebar.defaultProps = {
  pageType: 'note',
};
