import React, { useRef, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { Flex, Grid, Image, Input } from '@chakra-ui/react';
import Checkbox from '../filter/Checkbox';
import { PrimaryButton } from '../common/Buttons';
import useColorTokens from '../../hooks/useColorTokens';
import useClickOutside from '../../hooks/useClickOutside';
import location from '../../assets/desktop/icon-location.svg';

// portal query selector
const modalRoot = document.getElementById('modal-root') as HTMLElement;

interface Props {
  open: boolean;
  closeModal: Function;
}

const FilterModal = ({ open = false, closeModal }: Props) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const modalRef = useRef<HTMLDivElement>(null);

  const focusInput = () => inputRef.current?.focus();

  useClickOutside({ ref: modalRef, condition: open }, () => {
    document.body.style.overflow = 'scroll';
    closeModal();
  });

  useEffect(() => {
    document.body.style.overflow = 'hidden';
  }, []);

  return createPortal(
    open && (
      <Backdrop>
        <Container ref={modalRef}>
          <Flex
            w="100%"
            h="7.2rem"
            padding="2.4rem .8rem"
            borderBottomWidth="1px"
            borderStyle="solid"
            borderColor="rgba(secondary.darkGray, .2)"
            alignItems="center"
            onClick={focusInput}
          >
            <Flex justify="center" w="4.8rem">
              <Image src={location} />
            </Flex>
            <Input
              transform="translateY(2px)"
              variant="unstyled"
              placeholder="Filter by location..."
              ref={inputRef}
            />
          </Flex>
          <Flex flexDirection="column" p="2.4rem">
            <Checkbox>Full time only</Checkbox>
            <PrimaryButton mt="2.4rem">Search</PrimaryButton>
          </Flex>
        </Container>
      </Backdrop>
    ),
    modalRoot
  );
};

const Backdrop = ({ children }: any) => (
  <Grid
    w="100vw"
    h="100vh"
    pos="fixed"
    top="0"
    left="0"
    bgColor="rgba(0,0,0, .5)"
    placeItems="center"
    zIndex="overlay"
  >
    {children}
  </Grid>
);

const Container = React.forwardRef(
  ({ children }: any, ref: React.Ref<HTMLDivElement>) => (
    <Flex
      ref={ref}
      w="32.7rem"
      h="21.7rem"
      bgColor={useColorTokens().ui01}
      borderRadius="base"
      zIndex="modal"
      flexDirection="column"
    >
      {children}
    </Flex>
  )
);

export default FilterModal;
