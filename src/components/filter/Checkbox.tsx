import React from 'react';
import { Flex, chakra, Text, Img } from '@chakra-ui/react';
import { useColorModeValue } from '@chakra-ui/react';
import checkSVG from '../../assets/desktop/icon-check.svg';

interface Props {
  children: React.ReactNode;
  checked: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  [key: string]: any;
}

const Checkbox = ({ children, checked, onChange, ...props }: Props) => {
  const checkBoxBgColor = useColorModeValue(
    checked ? 'primary.violet' : 'rgba(25,32,45, .1)',
    checked ? 'primary.violet' : 'rgba(255,255,255,.1)'
  );

  return (
    <Flex {...props}>
      <chakra.label cursor="pointer">
        <chakra.input
          checked={checked}
          onChange={onChange}
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
            bgColor={checkBoxBgColor}
          >
            {checked && <Img src={checkSVG} />}
          </Flex>
          <Text
            d="inline"
            fontWeight="bold"
            ml="1.6rem"
            color={useColorModeValue('primary.veryDarkBlue', 'white')}
          >
            {children}
          </Text>
        </Flex>
      </chakra.label>
    </Flex>
  );
};

export default Checkbox;
