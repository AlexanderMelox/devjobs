import React from 'react';
import { Flex } from '@chakra-ui/react';
import headerBgMobile from '../../assets/mobile/bg-pattern-header.svg';
import headerBgTablet from '../../assets/tablet/bg-pattern-header.svg';
import headerBgDesktop from '../../assets/desktop/bg-pattern-header.svg';
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
    p={['3.2rem 2.4rem 7.2rem', '4.2rem 4rem 8.6rem']}
    h={['13.6rem', '16rem']}
    bgImage={[
      `url(${headerBgMobile})`,
      `url(${headerBgTablet})`,
      `url(${headerBgDesktop})`
    ]}
    bgRepeat="no-repeat"
    bgPosition="center center"
    bgSize="100% 100%"
  >
    <Flex
      w="100%"
      align="center"
      justify="space-between"
      maxW="111rem"
      m="0 auto"
    >
      {children}
    </Flex>
  </Flex>
);

export default Header;
