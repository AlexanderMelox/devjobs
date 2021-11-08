import React, { useState } from 'react';
import { Flex, chakra, Text, Img } from '@chakra-ui/react';
import { useColorModeValue } from '@chakra-ui/react';
import checkSVG from '../../assets/desktop/icon-check.svg';

interface Props {
  children: React.ReactNode;
  [key: string]: any;
}

const Checkbox = ({ children, ...props }: Props) => {
  const [checked, setChecked] = useState(false);

  const handleCheckboxChange = event => setChecked(event.target.checked);

  return (
    <Flex {...props}>
      <chakra.label cursor="pointer">
        <chakra.input
          checked={checked}
          onChange={handleCheckboxChange}
          type="checkbox"
          borderWidth="0"
          clip="rect(0 0 0 0)"
          clipPath="inset(50%)"
          h="1px"
          margin="-1px"
          overflow="hidden"
          padding="0"
          pos="absolute"
          whiteSpace="nowrap"
          w="1px"
        />
        <Flex align="center">
          <Flex
            justify="center"
            align="center"
            w="2.4rem"
            h="2.4rem"
            borderRadius="3px"
            bgColor={useColorModeValue(
              'rgba(25,32,45, .1)',
              'rgba(255,255,255,.1)'
            )}
          >
            {checked && <Img src={checkSVG} />}
          </Flex>
          <Text d="inline" fontWeight="bold" ml="1.6rem">
            {children}
          </Text>
        </Flex>
      </chakra.label>
    </Flex>
  );
};

export default Checkbox;
