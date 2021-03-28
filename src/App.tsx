import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';

import theme from './theme';
import Header from './components/header/Header';

const extendedTheme = extendTheme(theme);

console.log(extendedTheme);

export const App = () => (
  <ChakraProvider theme={extendedTheme}>
    <Header />
    <Switch>
      <Route exact path="/">
        home
      </Route>
      <Route exact path="/job/:id">
        jobs
      </Route>
    </Switch>
  </ChakraProvider>
);
