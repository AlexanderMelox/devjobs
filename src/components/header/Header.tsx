import React from 'react';
import { Flex } from '@chakra-ui/react';
import headerBgMobile from '../../assets/mobile/bg-pattern-header.svg';
import headerBgTablet from '../../assets/tablet/bg-pattern-header.svg';
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
    h={['13.6rem', '16rem']}
    p={['3.2rem 2.4rem 7.2rem', '4.2rem 4rem 8.6rem']}
    bgImage={[`url(${headerBgMobile})`, `url(${headerBgTablet})`]}
    bgRepeat="no-repeat"
    bgPosition="center center"
    bgSize="100% 100%"
  >
    {children}
  </Flex>
);

export default Header;
