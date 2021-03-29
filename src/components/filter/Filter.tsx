import React, { useRef } from 'react';
import { IconButton, Flex, Input, Image } from '@chakra-ui/react';
import useColorTokens from '../../hooks/useColorTokens';
import filter from '../../assets/mobile/icon-filter.svg';
import search from '../../assets/desktop/icon-search.svg';

interface Props {}

const Filter = (props: Props) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const focusInput = () => inputRef.current?.focus();

  const onSubmit = (event: React.SyntheticEvent) => {
    event.preventDefault();
    console.log('submit');
  };

  return (
    <form onSubmit={onSubmit}>
      <Container onClick={focusInput}>
        <Input
          ref={inputRef}
          variant="unstyled"
          placeholder="Filter by title"
        />
        <IconButton
          aria-label="Filter"
          icon={<Image src={filter} />}
          variant="ghost"
          minW="4.8rem"
          w="4.8rem"
          h="4.8rem"
          mr=".8rem"
        />
        <IconButton
          aria-label="Search"
          icon={<Image w="2rem" h="2rem" src={search} />}
          minW="4.8rem"
          w="4.8rem"
          h="4.8rem"
          bg="primary.violet"
          type="submit"
          _hover={{ bg: 'primary.violet' }}
        />
      </Container>
    </form>
  );
};

const Container = ({ children, ...props }: any) => (
  <Flex
    w="32.7rem"
    h="8rem"
    p="1.6rem"
    m="0 auto"
    align="center"
    bgColor={useColorTokens().ui01}
    borderRadius=".6rem"
    {...props}
  >
    {children}
  </Flex>
);

export default Filter;
