import React from 'react';
import { Link, Image } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import logo from '../../assets/desktop/logo.svg';

const Logo = () => {
  return (
    <Link as={RouterLink} to="/" color="secondary.white">
      <Image src={logo} alt="devjobs" />
    </Link>
  );
};

export default Logo;
