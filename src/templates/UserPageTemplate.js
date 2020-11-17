import React from 'react';
import PropTypes from 'prop-types';
import Sidebar from 'components/organisms/Sidebar/Sidebar';

const UserPageTemplate = ({ children }) => {
  return (
    <>
      <Sidebar />
      {children}
    </>
  );
};

export default UserPageTemplate;

UserPageTemplate.propTypes = {
  children: PropTypes.node.isRequired,
};
