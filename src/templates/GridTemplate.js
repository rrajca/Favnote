import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import UserPageTemplate from 'templates/UserPageTemplate';
import Input from 'components/atoms/Input/Input';
import Heading from 'components/atoms/Heading/Heading';
import Paragraph from 'components/atoms/Paragraph/Paragraph';
import withContext from 'hoc/withContext';

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

const GridTemplate = ({ children, pageContext }) => {
  return (
    <UserPageTemplate>
      <StyledWrapper>
        <Input search placeholder="search" />
        <StyledHeading as="h1" big>
          {pageContext}
        </StyledHeading>
        <StyledParagraph>6 {pageContext}</StyledParagraph>
        <StyledGrid>{children}</StyledGrid>
      </StyledWrapper>
    </UserPageTemplate>
  );
};

export default withContext(GridTemplate);

GridTemplate.propTypes = {
  children: PropTypes.arrayOf(PropTypes.object).isRequired,
  pageContext: PropTypes.oneOf(['notes', 'twitters', 'articles']),
};

GridTemplate.defaultProps = {
  pageContext: 'notes',
};
