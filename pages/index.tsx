import { useState } from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
// import Image as NextImage from 'next/image';
import { useColorMode } from '@chakra-ui/color-mode';
import { useDisclosure } from '@chakra-ui/hooks';
import { Image } from '@chakra-ui/image';
import {
  Box,
  Container,
  Flex,
  Heading,
  Link,
  List,
  ListItem,
  Text,
  UnorderedList,
} from '@chakra-ui/layout';
import { FullImageModal } from '../components/full-image-modal';
import PROJECTS from './../fixtures/my-projects.json';
import { ColorModeSwitcher } from '../components/color-mode-switcher';
import ProjectCard from '../components/project-card';

const Home: NextPage = () => {
  const { colorMode } = useColorMode();
  const linkColor = colorMode === 'light' ? 'darkblue' : 'lightblue';
  const gradient =
    colorMode === 'light' ? 'linear(to-t, green.200, gray.300)' : 'none';

  const { isOpen, onOpen, onClose } = useDisclosure();
  const [currentFullImage, setCurrentFullImage] = useState('');

  const showFullImage = (fullImageSrc: string) => {
    setCurrentFullImage(fullImageSrc);
    onOpen();
  };

  return (
    <div>
      <Head>
        <title>Pavel Sergeev - Homepage</title>
        <meta name='description' content='Pavel Sergeev - Homepage' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Box bgGradient={gradient} minH='100vh'>
        <Container maxW={{ base: 'full', md: 'container.md' }} m='auto' p='4'>
          <Box as='header'>
            <Flex justifyContent='flex-end' p='5px'>
              <ColorModeSwitcher />
            </Flex>
            <Heading as='h2' lineHeight='1.2'>
              Hello, I&apos;m{' '}
              <Text as='span' color={linkColor}>
                Pavel Sergeev
              </Text>
            </Heading>
            <Text mt='4'>
              I&apos;m a junior react developer. You can see some of my projects
              below. In the future I have plans to become a full stack developer
              (node.js/express back-end).
            </Text>
          </Box>
          <Box as='section' mt='20'>
            <Heading as='h2' fontSize={24} mb={4}>
              Tech Stack
            </Heading>
            <UnorderedList>
              <ListItem>JS (ES6), Typescript, HTML, CSS</ListItem>
              <ListItem>React, Redux (Toolkit)</ListItem>
              <ListItem>
                Material UI, Chakra UI, Styled-Component, CSS Modules, SCSS
              </ListItem>
              <ListItem>http, REST API, axios</ListItem>
              <ListItem>Git, ftp, ssh, devtools, </ListItem>
              <ListItem>NodeJS, Express, Babel, Webpack</ListItem>
            </UnorderedList>
          </Box>
          <Box as='section'>
            <Heading as='h2' mt='20' fontSize={24} mb={6}>
              My Projects
            </Heading>
            <List>
              {PROJECTS.map((project, i) => (
                <ProjectCard
                  project={project}
                  showFullImage={showFullImage}
                  key={i}
                />
              ))}
            </List>
          </Box>
          <Box as='section'>
            <Heading as='h2' mt='20' mb='2' fontSize='1.4rem'>
              Contacts
            </Heading>
            <List mb={4}>
              <ListItem>
                Telegram{' '}
                <Link
                  href='https://telegram.me/rtxnn'
                  target='_blank'
                  rel='noopener'
                >
                  @rtxnn
                </Link>
              </ListItem>
              <ListItem>
                GitHub{' '}
                <Link
                  href='https://github.com/pavel-s'
                  target='_blank'
                  rel='noopener'
                >
                  <Image
                    src='images/icons/GitHub-Mark-32px.png'
                    alt=''
                    htmlWidth='16px'
                    htmlHeight='16px'
                    display='inline-block'
                    verticalAlign='middle'
                    mr={1}
                    filter={colorMode === 'dark' ? 'invert(1)' : 'none'}
                  />
                  pavel-s
                </Link>
              </ListItem>
            </List>
          </Box>
          <FullImageModal
            isOpen={isOpen}
            onClose={onClose}
            src={currentFullImage}
          />
        </Container>
      </Box>
    </div>
  );
};

export default Home;
