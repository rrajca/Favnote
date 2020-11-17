import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import UserPageTemplate from 'templates/UserPageTemplate';
import Heading from 'components/atoms/Heading/Heading';
import Paragraph from 'components/atoms/Paragraph/Paragraph';
import Button from 'components/atoms/Button/Button';
import withContext from 'hoc/withContext';

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: baseline;
  padding: 130px 115px 130px 115px;
  max-width: 780px;
`;

const StyledHeading = styled(Heading)`
  margin: 0;
`;

const DateInfo = styled(Paragraph)`
  margin: 0;
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  line-height: normal;
`;

const Message = styled(Paragraph)`
  margin: 35px 0 45px;
`;

const DeleteButton = styled.button`
  margin-top: 17px;
  font-family: ${({ theme }) => theme.fontFamily};
  font-size: ${({ theme }) => theme.fontSize.s};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  text-decoration: underline;
  background-color: transparent;
  border: none;
  cursor: pointer;
`;

class DetailsTemplate extends Component {
  state = {
    redirect: false,
  };

  handleCloseButtonClick = () => {
    this.setState({ redirect: true });
  };

  render() {
    const { pageContext } = this.props;
    const { redirect } = this.state;

    if (redirect) {
      return <Redirect to={`/${pageContext}`} />;
    }
    return (
      <UserPageTemplate>
        <StyledWrapper>
          <StyledHeading as="h1" big>
            Note
          </StyledHeading>
          <DateInfo>CREATED – 25/03/2019</DateInfo>
          <Message>
            Born and raised in Illinois, Davis left his studies at the Juilliard School in New York
            City and made his professional debut as a member of saxophonist Charlie Parker&apos;s
            bebop quintet from 1944 to 1948. Shortly after, he recorded the Birth of the Cool
            sessions for Capitol Records, which were instrumental to the development of cool jazz.
            In the early 1950s, Miles Davis recorded some of the earliest hard bop music while on
            Prestige Records but did so haphazardly due to a heroin addiction. After a widely
            acclaimed comeback performance at the Newport Jazz Festival in 1955, he signed a
            long-term contract with Columbia Records and recorded the 1957 album &apos;Round About
            Midnight.[2] It was his first work with saxophonist John Coltrane and bassist Paul
            Chambers, key members of the sextet he led into the early 1960s. During this period, he
            alternated between orchestral jazz collaborations with arranger Gil Evans, such as the
            Spanish-influenced Sketches of Spain (1960), and band recordings, such as Milestones
            (1958) and Kind of Blue (1959).
          </Message>
          <Button activeColor={pageContext} onClick={this.handleCloseButtonClick}>
            close / save
          </Button>
          <DeleteButton>remove note</DeleteButton>
        </StyledWrapper>
      </UserPageTemplate>
    );
  }
}

export default withContext(DetailsTemplate);

DetailsTemplate.propTypes = {
  pageContext: PropTypes.oneOf(['notes', 'twitters', 'articles']),
};

DetailsTemplate.defaultProps = {
  pageContext: 'notes',
};
