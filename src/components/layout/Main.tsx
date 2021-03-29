import React from 'react';
import { Grid, GridItem } from '@chakra-ui/react';

interface Props {
  children: React.ReactElement | React.ReactElement[];
}

const Main = ({ children }: Props) => {
  return (
    <Grid templateColumns="2.4rem 1fr 2.4rem">
      <GridItem colstart={2} colEnd={3}>
        {children}
      </GridItem>
    </Grid>
  );
};

export default Main;
