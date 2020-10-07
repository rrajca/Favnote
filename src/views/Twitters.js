import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import GridTemplate from 'templates/GridTemplate';
import Card from 'components/molecules/Card/Card';

const Twitters = ({ twitters }) => {
  return (
    <GridTemplate pageType="twitters">
      {twitters.map(({ title, created, content, twitterName, id }) => (
        <Card
          key={id}
          cardType="twitters"
          title={title}
          created={created}
          content={content}
          twitterName={twitterName}
          id={id}
        />
      ))}
    </GridTemplate>
  );
};

const mapStateToProps = state => {
  const { twitters } = state;
  return { twitters };
};

export default connect(mapStateToProps)(Twitters);

Twitters.propTypes = {
  twitters: PropTypes.arrayOf(PropTypes.object).isRequired,
};
