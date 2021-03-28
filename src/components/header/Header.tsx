import React from 'react';
import { Flex, Link } from '@chakra-ui/react';
import headerBg from '../../assets/mobile/bg-pattern-header.svg';
import Logo from './Logo';
import ThemeSwitcher from './ThemeSwitcher';

const Header = () => {
  return (
    <Container>
      <Logo />
      <ThemeSwitcher />
    </Container>
  );
};

const Container = ({ children }: { children: React.ReactNode }) => (
  <Flex
    align="center"
    justify="space-between"
    height="13.6rem"
    p="3.2rem 2.4rem 7.2rem"
    bgImage={`url(${headerBg})`}
    bgRepeat="no-repeat"
    bgPosition="center center"
    bgSize="cover"
  >
    {children}
  </Flex>
);

export default Header;
