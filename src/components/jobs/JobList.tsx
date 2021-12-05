import React from 'react';
import { Grid } from '@chakra-ui/react';
import Job from './Job';
import { Job as JobType } from '../../types';

interface Props {
  jobs: JobType[];
}

const JobList = ({ jobs = [] }: Props) => {
  return (
    <Grid
      templateColumns={['1fr', 'repeat(2, 1fr)', 'repeat(3, 1fr)']}
      templateRows="1fr"
      columnGap={[null, '1.1rem', '3rem']}
      rowGap={['5rem', '6.5rem']}
      mb={['3.2rem', '5.6rem']}
      mt={{ lg: '10.5rem' }}
    >
      {jobs.map(job => (
        <Job key={job.id} job={job} />
      ))}
    </Grid>
  );
};

export default JobList;
