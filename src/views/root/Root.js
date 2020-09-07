import React from 'react';
import { ThemeProvider } from 'styled-components';

import GlobalStyle from 'theme/GlobalStyle';
import { theme } from 'theme/mainTheme';

import Button from 'components/atoms/Button/Button';
import Heading from 'components/atoms/Heading/Heading';

function Root() {
  return (
    <div>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <>
          <h1>Hello</h1>
          <Button>Close / Save</Button>
          <Button secondary>Remove</Button>
          <Heading big>Notes</Heading>
          <Heading>Small header</Heading>
        </>
      </ThemeProvider>
    </div>
  );
}

export default Root;
