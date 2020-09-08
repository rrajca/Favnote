import React from 'react';
import { ThemeProvider } from 'styled-components';

import GlobalStyle from 'theme/GlobalStyle';
import { theme } from 'theme/mainTheme';

import Button from 'components/atoms/Button/Button';
import Heading from 'components/atoms/Heading/Heading';
import Paragraph from 'components/atoms/Paragraph/Paragraph';
import Input from 'components/atoms/Input/Input';

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
          <Paragraph>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo, distinctio?
          </Paragraph>
          <Input type="text" placeholder="login" />
          <Input type="text" placeholder="search" search />
        </>
      </ThemeProvider>
    </div>
  );
}

export default Root;
