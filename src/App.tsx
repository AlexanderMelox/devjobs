import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { ChakraProvider } from '@chakra-ui/react'

import theme from './theme'
import Header from './components/header/Header'

export const App = () => (
  <ChakraProvider theme={theme}>
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
)
