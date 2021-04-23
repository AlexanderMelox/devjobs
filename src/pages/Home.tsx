import { Box, Checkbox } from '@chakra-ui/react';
import React from 'react';
import Filter from '../components/filter/Filter';

const Home = () => {
  return (
    <Box mt="-4rem">
      <Filter />
      <Checkbox size="sm">Small</Checkbox>
      <Checkbox size="md">Medium</Checkbox>
      <Checkbox size="lg">Large</Checkbox>
    </Box>
  );
};

export default Home;
