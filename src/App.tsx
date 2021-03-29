import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';

import theme from './theme';
import Header from './components/header/Header';
import Main from './components/layout/Main';
import Home from './pages/Home';

const extendedTheme = extendTheme(theme);

console.log(extendedTheme);

export const App = () => (
  <ChakraProvider theme={extendedTheme}>
    <Header />
    <Switch>
      <Main>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/job/:id">
          jobs
        </Route>
      </Main>
    </Switch>
  </ChakraProvider>
);
