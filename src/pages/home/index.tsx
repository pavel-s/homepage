import { IconButton } from '@chakra-ui/button';
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
} from '@chakra-ui/layout';
import { Badge } from '@chakra-ui/react';
import { useState } from 'react';
import { ColorModeSwitcher } from '../../ColorModeSwitcher';
import { FullImageModal } from '../../containers/full-image-modal';
import PROJECTS from './../../fixtures/my-projects.json';

const Home = () => {
  const { colorMode } = useColorMode();
  const linkColor = colorMode === 'light' ? 'darkblue' : 'lightblue';
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [currentFullImage, setCurrentFullImage] = useState('');
  const gradient =
    colorMode === 'light' ? 'linear(to-t, green.200, gray.300)' : 'none';

  return (
    <Box bgGradient={gradient} minH='100vh'>
      <Flex justifyContent='flex-end' p='5px'>
        <ColorModeSwitcher />
      </Flex>
      <Container maxW={{ base: 'full', md: 'container.lg' }} m='auto' p='4'>
        <Heading as='h1' lineHeight='1.2'>
          Hello, I'm{' '}
          <Text as='span' color={linkColor}>
            Pavel Sergeev
          </Text>
          , Frontend React Developer!
        </Heading>
        <Text mt='4'>
          I work with stack: react, redux-toolkit, styled-components /
          material-ui / chakra-ui, formik, axios, typescript. Additionally have
          some experience with express (simple api for my projects). In the
          future I have plans to develop as a full stack developer
          (node.js/express back-end).
        </Text>
        <Heading as='h2' mt='20' fontSize='1.4rem' mb='1rem'>
          My Projects:
        </Heading>
        <List>
          {PROJECTS.map((project, i) => (
            <ListItem display={{ md: 'flex' }} mb='1rem' key={i}>
              <Box>
                <IconButton
                  onClick={() => {
                    setCurrentFullImage(project.imageFull);
                    onOpen();
                  }}
                  aria-label='open full image'
                  boxSize='10rem'
                  overflow='hidden'
                  m='0 1.2rem 0.8rem 0'
                  boxShadow='md'
                >
                  <Image
                    src={project.imagePreview}
                    boxSize='10rem'
                    objectFit='cover'
                    alt='project screenshot'
                  />
                </IconButton>
              </Box>
              <Box>
                <Text>
                  <Link href={project.link} color={linkColor} fontWeight='bold'>
                    {project.title}
                  </Link>{' '}
                  - {project.description}
                </Text>

                <Text mt='2'>
                  <Badge mr='2'>stack</Badge>
                  {project.stack}
                </Text>

                <Box mt='4'>
                  <Link
                    href={project.github}
                    display='inline-block'
                    aria-label='project github link'
                  >
                    <Image
                      src='images/icons/GitHub-Mark-32px.png'
                      htmlWidth='32px'
                      htmlHeight='32px'
                      filter={colorMode === 'dark' ? 'invert(1)' : 'none'}
                      alt=''
                    />
                  </Link>
                </Box>
              </Box>
            </ListItem>
          ))}
        </List>
        <Heading as='h2' mt='20' mb='2' fontSize='1.4rem'>
          Contacts:
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
        <FullImageModal
          isOpen={isOpen}
          onClose={onClose}
          src={currentFullImage}
        />
      </Container>
    </Box>
  );
};

export default Home;
