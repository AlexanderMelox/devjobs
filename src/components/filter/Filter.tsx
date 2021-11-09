import React, { useRef, useState } from 'react';
import {
  IconButton,
  Flex,
  Input,
  Image,
  useMediaQuery,
  Grid
} from '@chakra-ui/react';
import { useColorModeValue } from '@chakra-ui/react';
import useColorTokens from '../../hooks/useColorTokens';
import filter from '../../assets/mobile/icon-filter.svg';
import searchDark from '../../assets/desktop/icon-search-dark.svg';
import searchLight from '../../assets/desktop/icon-search-light.svg';
import location from '../../assets/desktop/icon-location.svg';
import FilterModal from './FilterModal';
import Checkbox from './Checkbox';
import { PrimaryButton } from '../common/Buttons';

interface Props {}

const Filter = (props: Props) => {
  const [isLargerThan768] = useMediaQuery('(min-width: 768px)');
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

  const mobileFilter = (
    <>
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
    </>
  );

  const largeFilter = (
    <Container>
      <FilterGroup>
        <Image src={searchDark} />
        <Input
          paddingLeft="1.6rem"
          ref={inputRef}
          variant="unstyled"
          placeholder="Filter by title..."
          color={tokens.inputTextColor}
        />
      </FilterGroup>
      <FilterGroup maxW="30rem">
        <Image src={location} />
        <Input
          paddingLeft="1.6rem"
          ref={inputRef}
          variant="unstyled"
          placeholder="Filter by location..."
          color={tokens.inputTextColor}
        />
      </FilterGroup>
      <Flex
        p="0 1.6rem 0 2rem"
        align="center"
        justify="space-between"
        minW="25.2rem"
        maxWidth="34.5rem"
        grow="1"
      >
        <Checkbox minW="10.8rem">Full Time</Checkbox>
        <PrimaryButton w="8rem" maxW="12.3rem">
          Search
        </PrimaryButton>
      </Flex>
    </Container>
  );

  return (
    <form onSubmit={onSubmit}>
      {!isLargerThan768 && mobileFilter}
      {isLargerThan768 && largeFilter}
    </form>
  );
};

const Container = ({ children, ...props }: any) => (
  <Flex
    maxW={['32.7rem', '100%']}
    h="8rem"
    p={['1.6rem', '0']}
    m="0 auto 5.7rem auto"
    align={['center', 'stretch']}
    bgColor={useColorTokens().ui01}
    borderRadius="base"
    justify="stretch"
    {...props}
  >
    {children}
  </Flex>
);

const FilterButton = props => (
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

const SearchButton = props => (
  <IconButton
    aria-label="Search"
    icon={<Image w="2rem" h="2rem" src={searchLight} />}
    minW="4.8rem"
    w="4.8rem"
    h="4.8rem"
    bg="primary.violet"
    type="submit"
    _hover={{ opacity: 0.9 }}
    {...props}
  />
);

const FilterGroup = ({ children, ...props }) => (
  <Flex
    {...props}
    grow="1"
    p="0 2.4rem 0 2.8rem"
    borderRight="1px"
    borderColor={useColorModeValue('#E2E6EA', '#2A3342')}
    align="center"
  >
    {children}
  </Flex>
);

export default Filter;
