import { Box } from '@chakra-ui/react';
import React from 'react';
import Filter from '../components/filter/Filter';
import JobList from '../components/jobs/JobList';
import { PrimaryButton } from '../components/common/Buttons';
import jobs from '../data/jobs.json';

const Home = () => {
  return (
    <Box mt="-4rem">
      <Filter />
      <JobList jobs={jobs} />
      <PrimaryButton w="14.1rem" m="0 auto" mb="6.2rem">
        Load more
      </PrimaryButton>
    </Box>
  );
};

export default Home;
