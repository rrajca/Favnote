import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import UserPageTemplate from 'templates/UserPageTemplate';
import Input from 'components/atoms/Input/Input';
import Heading from 'components/atoms/Heading/Heading';
import Paragraph from 'components/atoms/Paragraph/Paragraph';

const StyledWrapper = styled.div`
  padding: 58px 160px 25px 70px;
`;

const StyledGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 85px;
`;

const StyledHeading = styled(Heading)`
  margin-bottom: 0;

  ::first-letter {
    text-transform: uppercase;
  }
`;

const StyledParagraph = styled(Paragraph)`
  margin: 0 0 40px;
  color: ${({ theme }) => theme.grey300};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
`;

const GridTemplate = ({ children, pageType }) => {
  return (
    <UserPageTemplate pageType={pageType}>
      <StyledWrapper>
        <Input search placeholder="search" />
        <StyledHeading as="h1" big>
          {pageType}
        </StyledHeading>
        <StyledParagraph>6 {pageType}</StyledParagraph>
        <StyledGrid>{children}</StyledGrid>
      </StyledWrapper>
    </UserPageTemplate>
  );
};

export default GridTemplate;

GridTemplate.propTypes = {
  children: PropTypes.arrayOf(PropTypes.object).isRequired,
  pageType: PropTypes.oneOf(['notes', 'twitters', 'articles']),
};

GridTemplate.defaultProps = {
  pageType: 'notes',
};
