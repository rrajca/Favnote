import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { Redirect } from 'react-router-dom';

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
  border: 5px solid ${({ theme }) => theme.twitters};
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

class Card extends Component {
  state = {
    redirect: false,
  };

  handleNoteClick = () => this.setState({ redirect: true });

  render() {
    const { id, cardType, title, created, content, twitterName, articleUrl } = this.props;
    const { redirect } = this.state;

    if (redirect) {
      return <Redirect to={`${cardType}/${id}`} />;
    }
    return (
      <StyledWrapper onClick={this.handleNoteClick}>
        <InnerWrapper activeColor={cardType}>
          <StyledHeading>{title}</StyledHeading>
          <DateInfo>{created}</DateInfo>
          {cardType === 'twitters' && (
            <TwitterAvatar src={`https://unavatar.now.sh/twitter/${twitterName}`} />
          )}
          {cardType === 'articles' && <StyledLinkButton href={articleUrl} target="_blank" />}
        </InnerWrapper>
        <InnerWrapper flex>
          <Paragraph>{content}</Paragraph>
          <Button secondary>Remove</Button>
        </InnerWrapper>
      </StyledWrapper>
    );
  }
}

export default Card;

Card.propTypes = {
  id: PropTypes.number.isRequired,
  cardType: PropTypes.oneOf(['notes', 'twitters', 'articles']),
  title: PropTypes.string.isRequired,
  created: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  twitterName: PropTypes.string,
  articleUrl: PropTypes.string,
};

Card.defaultProps = {
  cardType: 'notes',
  twitterName: null,
  articleUrl: null,
};
