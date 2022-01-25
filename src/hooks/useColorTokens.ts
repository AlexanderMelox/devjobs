import { useColorModeValue } from '@chakra-ui/react';

type Tokens = {
  ui01: string;
  text01: string;
  inputTextColor: string;
  [key: string]: string;
};

const useColorTokens = () => {
  const tokens: Tokens = {
    ui01: useColorModeValue('secondary.white', 'primary.veryDarkBlue'),
    text01: useColorModeValue('primary.veryDarkBlue', 'secondary.white'),
    inputTextColor: useColorModeValue('primary.veryDarkBlue', 'secondary.white')
  };

  return tokens;
};

export default useColorTokens;
