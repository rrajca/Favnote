import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

import Heading from 'components/atoms/Heading/Heading';
import Paragraph from 'components/atoms/Paragraph/Paragraph';
import Button from 'components/atoms/Button/Button';

import linkIcon from 'assets/icons/link.svg';

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 385px;
  border-radius: 10px;
  box-shadow: 0 5px 30px -10px hsla(0, 0%, 0%, 0.1);
  overflow: hidden;
`;

const InnerWrapper = styled.div`
  position: relative;
  padding: 15px 30px;
  background-color: ${({ activeColor, theme }) => (activeColor ? theme[activeColor] : 'white')};

  :first-of-type {
    z-index: 9999;
  }

  ${({ flex }) =>
    flex &&
    css`
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: baseline;
      flex: 1;
    `}
`;

const StyledHeading = styled(Heading)`
  margin: 0;
`;

const DateInfo = styled(Paragraph)`
  margin: 0;
  font-size: ${({ theme }) => theme.fontSize.xs};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  line-height: normal;
`;

const TwitterAvatar = styled.img`
  position: absolute;
  right: 25px;
  top: 25px;
  width: 86px;
  height: 86px;
  border: 5px solid ${({ theme }) => theme.twitter};
  border-radius: 50%;
`;

const StyledLinkButton = styled.a`
  display: block;
  position: absolute;
  right: 25px;
  top: 50%;
  width: 47px;
  height: 47px;
  border-radius: 50%;
  background: white url(${linkIcon}) no-repeat;
  background-position: 50%;
  transform: translateY(-50%);
`;

const Card = ({ cardType }) => (
  <StyledWrapper>
    <InnerWrapper activeColor={cardType}>
      <StyledHeading>Hello Roman</StyledHeading>
      <DateInfo>03.07.2020</DateInfo>
      {cardType === 'twitter' && <TwitterAvatar src="https://unavatar.now.sh/twitter/kamiraper" />}
      {cardType === 'article' && (
        <StyledLinkButton href="https://github.com/rrajca" target="_blank" />
      )}
    </InnerWrapper>
    <InnerWrapper flex>
      <Paragraph>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia saepe quas, enim minus
        ducimus animi perspiciatis suscipit cum modi repellendus obcaecati atque maiores,
        voluptatibus dolore! Commodi quis perspiciatis tenetur fugiat?
      </Paragraph>
      <Button secondary>Remove</Button>
    </InnerWrapper>
  </StyledWrapper>
);

export default Card;

Card.propTypes = {
  cardType: PropTypes.oneOf(['note', 'twitter', 'article']),
};

Card.defaultProps = {
  cardType: 'note',
};
