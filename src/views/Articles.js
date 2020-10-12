import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import GridTemplate from 'templates/GridTemplate';
import Card from 'components/molecules/Card/Card';

const Articles = ({ articles }) => {
  return (
    <GridTemplate pageType="articles">
      {articles.map(({ title, created, content, articleUrl, id }) => (
        <Card
          key={id}
          cardType="articles"
          title={title}
          created={created}
          content={content}
          articleUrl={articleUrl}
          id={id}
        />
      ))}
    </GridTemplate>
  );
};

const mapStateToProps = state => {
  const { articles } = state;
  return { articles };
};

export default connect(mapStateToProps)(Articles);

Articles.propTypes = {
  articles: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      created: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
      articleUrl: PropTypes.string.isRequired,
    }),
  ),
};

Articles.defaultProps = {
  articles: [],
};
