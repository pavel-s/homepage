import React, { FC } from 'react';
import Head from 'next/head';
import { useColorMode } from '@chakra-ui/color-mode';
import { Box, Container, Flex } from '@chakra-ui/layout';
import { ColorModeSwitcher } from '../components/color-mode-switcher';

const MainLayout: FC = ({ children }) => {
  const { colorMode } = useColorMode();
  const gradient =
    colorMode === 'light' ? 'linear(to-t, green.200, gray.300)' : 'none';

  return (
    <>
      <Head>
        <title>Pavel Sergeev - Homepage</title>
        <meta name='description' content='Pavel Sergeev - Homepage' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Box bgGradient={gradient} minH='100vh'>
        <Container maxW={{ base: 'full', md: 'container.md' }} m='auto' p='4'>
          <Flex justifyContent='flex-end' p='5px'>
            <ColorModeSwitcher />
          </Flex>
          {children}
        </Container>
      </Box>
    </>
  );
};

export default MainLayout;
