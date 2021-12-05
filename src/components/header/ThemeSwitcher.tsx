import React from 'react';
import {
  chakra,
  Flex,
  Image,
  useColorMode,
  Checkbox,
  Box
} from '@chakra-ui/react';
import sun from '../../assets/desktop/icon-sun.svg';
import moon from '../../assets/desktop/icon-moon.svg';
import { motion } from 'framer-motion';

interface Props {}

const ThemeSwitcher = (props: Props) => {
  return (
    <Flex width="11.2rem" align="center" justify="space-between">
      <Image src={sun} alt="" />
      <Switch />
      <Image src={moon} alt="" />
    </Flex>
  );
};

const hiddenInput = {
  border: '0px',
  clip: 'rect(0px, 0px, 0px, 0px)',
  height: '1px',
  width: ' 1px',
  margin: '-1px',
  padding: '0px',
  overflow: 'hidden',
  whiteSpace: 'nowrap',
  position: 'absolute'
};

const Switch = (props: Props) => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Label>
      <Checkbox id="test" onChange={toggleColorMode} sx={hiddenInput} />
      <Track layout colorMode={colorMode}>
        <motion.div animate={{ x: colorMode === 'light' ? 0 : 26 }}>
          <Thumb />
        </motion.div>
      </Track>
    </Label>
  );
};

const Label = ({ children }: any) => (
  <chakra.label cursor="pointer" htmlFor="test">
    {children}
  </chakra.label>
);

const Track = ({ children }: any) => (
  <Flex
    width="4.8rem"
    height="2.4rem"
    borderRadius="1.2rem"
    bgColor="secondary.white"
    align="center"
    px="4px"
    sx={{
      '&:hover .theme-switcher-thumb': {
        transition: 'all .2s',
        bg: 'primary.lightViolet'
      }
    }}
  >
    {children}
  </Flex>
);

const Thumb = () => (
  <Box
    className="theme-switcher-thumb"
    width="1.4rem"
    height="1.4rem"
    borderRadius="50%"
    bgColor="primary.violet"
    transition="all .2s"
  />
);

export default ThemeSwitcher;
