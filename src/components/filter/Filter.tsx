import React, { useRef, useState } from 'react';
import { IconButton, Flex, Input, Image } from '@chakra-ui/react';
import useColorTokens from '../../hooks/useColorTokens';
import filter from '../../assets/mobile/icon-filter.svg';
import search from '../../assets/desktop/icon-search.svg';
import FilterModal from './FilterModal';

interface Props {}

const Filter = (props: Props) => {
  const tokens = useColorTokens();
  const inputRef = useRef<HTMLInputElement>(null);
  const [isModalOpen, setItModalOpen] = useState(false);

  const focusInput = () => inputRef.current?.focus();

  const openFilterModal = () => setItModalOpen(true);

  const closeModal = () => setItModalOpen(false);

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
          placeholder="Filter by title..."
          color={tokens.inputTextColor}
        />
        <FilterButton onClick={openFilterModal} />
        <SearchButton />
      </Container>
      <FilterModal open={isModalOpen} closeModal={closeModal} />
    </form>
  );
};

const Container = ({ children, ...props }: any) => (
  <Flex
    maxW="32.7rem"
    h="8rem"
    p="1.6rem"
    m="0 auto 3.2rem auto"
    align="center"
    bgColor={useColorTokens().ui01}
    borderRadius="base"
    {...props}
  >
    {children}
  </Flex>
);

const FilterButton = (props) => (
  <IconButton
    aria-label="Filter"
    icon={<Image src={filter} />}
    variant="ghost"
    minW="4.8rem"
    w="4.8rem"
    h="4.8rem"
    mr=".8rem"
    {...props}
  />
);

const SearchButton = (props) => (
  <IconButton
    aria-label="Search"
    icon={<Image w="2rem" h="2rem" src={search} />}
    minW="4.8rem"
    w="4.8rem"
    h="4.8rem"
    bg="primary.violet"
    type="submit"
    _hover={{ bg: 'primary.violet' }}
    {...props}
  />
);

export default Filter;
