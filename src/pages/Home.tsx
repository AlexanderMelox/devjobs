import { Box } from '@chakra-ui/react';
import React from 'react';
import Filter from '../components/filter/Filter';
import JobList from '../components/jobs/JobList';
import jobs from '../data/jobs.json';

const Home = () => {
  return (
    <Box mt="-4rem">
      <Filter />
      <JobList jobs={jobs} />
    </Box>
  );
};

export default Home;
