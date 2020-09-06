import React from 'react';
import Button from 'components/atoms/Button/Button';
import GlobalStyle from 'theme/GlobalStyle';

function Root() {
  return (
    <div>
      <GlobalStyle />
      <h1>Hello</h1>
      <Button>Close / Save</Button>
      <Button secondary>Remove</Button>
    </div>
  );
}

export default Root;
