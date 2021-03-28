import React from 'react';
import { Link, Text } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';

const Logo = () => {
  return (
    <Link
      as={RouterLink}
      to="/"
      color="secondary.white"
      _hover={{ textDecoration: 'none' }}
    >
      <Text fontSize="3.2rem" fontWeight="bold">
        devjobs
      </Text>
    </Link>
  );
};

export default Logo;
