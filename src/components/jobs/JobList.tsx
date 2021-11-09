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
      templateColumns={['1fr', '1fr 1fr']}
      templateRows="1fr"
      columnGap={[null, '1.1rem']}
    >
      {jobs.map(job => (
        <Job key={job.id} job={job} />
      ))}
    </Grid>
  );
};

export default JobList;
