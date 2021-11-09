import { Box } from '@chakra-ui/react';
import React from 'react';
import Filter from '../components/filter/Filter';
import JobList from '../components/jobs/JobList';
import { PrimaryButton } from '../components/common/Buttons';
import jobs from '../data/jobs.json';

const Home = () => {
  return (
    <Box m="-4rem auto 0 auto" maxW="111rem">
      <Filter />
      <JobList jobs={jobs} />
      <PrimaryButton w="14.1rem" m="0 auto" mb="6.2rem">
        Load more
      </PrimaryButton>
    </Box>
  );
};

export default Home;
