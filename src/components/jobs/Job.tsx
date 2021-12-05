import React from 'react';
import { Box, Flex, Heading, Text } from '@chakra-ui/react';
import { Job as JobType } from '../../types';
import logos from '../../utils/logos';
import useColorTokens from '../../hooks/useColorTokens';

interface Props {
  job: JobType;
}

const Job = ({
  job: { id, company, logoBackground, position, postedAt, contract, location }
}: Props) => {
  const { ui01, text01 } = useColorTokens();

  return (
    <Flex
      direction="column"
      bgColor={ui01}
      p="4.9rem 3.2rem 3.2rem"
      pos="relative"
      borderRadius=".6rem"
      color="secondary.darkGray"
    >
      <Flex
        w="5rem"
        h="5rem"
        justify="center"
        align="center"
        pos="absolute"
        top="-2.5rem"
        left="3.2rem"
        bgColor={logoBackground}
        borderRadius="1.5rem"
      >
        <img src={logos[id - 1]} alt={company} />
      </Flex>
      <Flex>
        <span>{postedAt}</span>
        <Box mx="1rem" as="span">
          &#9679;
        </Box>
        <span>{contract}</span>
      </Flex>
      <Heading as="h2" fontSize="2rem" mt="1rem" color={text01}>
        {position}
      </Heading>
      <Text mt="1.2rem">{company}</Text>
      <Text fontWeight="bold" mt="2.6rem" color="primary.violet">
        {location}
      </Text>
    </Flex>
  );
};

export default Job;
