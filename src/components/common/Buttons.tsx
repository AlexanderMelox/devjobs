import React from 'react';
import { Button } from '@chakra-ui/react';

interface Props {
  children: React.ReactNode;
  [key: string]: any;
}

export const PrimaryButton = ({ children, ...props }: Props) => {
  return (
    <Button
      d="block"
      w="100%"
      h="4.8rem"
      maxW="27.9rem"
      bgColor="primary.violet"
      color="secondary.white"
      {...props}
    >
      {children}
    </Button>
  );
};
