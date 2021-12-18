import { useState } from 'react';
import type { NextPage } from 'next';
// import Image as NextImage from 'next/image';
import { useColorMode } from '@chakra-ui/color-mode';
import { useDisclosure } from '@chakra-ui/hooks';
import { Image } from '@chakra-ui/image';
import {
  Box,
  Heading,
  Link,
  List,
  ListItem,
  Text,
  UnorderedList,
} from '@chakra-ui/layout';
import { FullImageModal } from '../components/full-image-modal';
import PROJECTS from './../fixtures/my-projects.json';
import ProjectCard from '../components/project-card';

const Home: NextPage = () => {
  const { colorMode } = useColorMode();
  const linkColor = colorMode === 'light' ? 'darkblue' : 'lightblue';

  const { isOpen, onOpen, onClose } = useDisclosure();
  const [currentFullImage, setCurrentFullImage] = useState('');

  const showFullImage = (fullImageSrc: string) => {
    setCurrentFullImage(fullImageSrc);
    onOpen();
  };

  return (
    <Box as='article'>
      <Box as='header'>
        <Heading as='h2' lineHeight='1.2'>
          Hello, I&apos;m{' '}
          <Text as='span' color={linkColor}>
            Pavel Sergeev
          </Text>
        </Heading>
        <Text mt='4'>
          I&apos;m a junior front-end developer. You can see some of my projects
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
          <ListItem>
            Also, I have some experience with React Native (Expo) and
            Electron.js
          </ListItem>
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
    </Box>
  );
};

export default Home;
