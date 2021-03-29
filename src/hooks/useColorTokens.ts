import { useColorModeValue } from '@chakra-ui/react';

const useColorTokens = () => {
  const tokens = {
    ui01: useColorModeValue('secondary.white', 'primary.veryDarkBlue'),
    text01: useColorModeValue('primary.veryDarkBlue', 'secondary.white'),
  };

  return tokens;
};

export default useColorTokens;
