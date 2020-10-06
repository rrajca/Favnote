import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import UserPageTemplate from 'templates/UserPageTemplate';

const DetailsTemplate = ({ pageType }) => {
  return (
    <UserPageTemplate pageType={pageType}>
      <h1>Note</h1>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto sequi atque dolore cum
        exercitationem aliquid non asperiores expedita. Doloremque provident, a fugiat nihil
        voluptatibus nulla! Labore voluptates aperiam officiis animi quaerat expedita hic accusamus,
        enim perspiciatis ullam ratione ipsam molestiae esse aspernatur. Consequatur reprehenderit
        minus ducimus nesciunt quidem illum, facilis enim ea nobis consequuntur porro placeat
        laborum quas in, animi, velit quod sint perspiciatis. Recusandae est nemo, ipsum dicta
        aperiam nobis eius quas optio necessitatibus ipsa sit temporibus nisi corrupti commodi
        dolorum doloribus! Nulla, possimus! Magnam, fugit voluptatibus ipsum nobis eum provident
        officia hic excepturi consectetur! Esse qui consectetur quod?
      </p>
      <Link to="/">go back</Link>
    </UserPageTemplate>
  );
};

export default DetailsTemplate;

DetailsTemplate.propTypes = {
  pageType: PropTypes.oneOf(['notes', 'twitters', 'articles']),
};

DetailsTemplate.defaultProps = {
  pageType: 'notes',
};
