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
import { useState } from 'react';
import { ColorModeSwitcher } from '../../ColorModeSwitcher';
import { FullImageModal } from '../../containers/full-image-modal';

const projects = [
  {
    title: 'Starbucks rewards',
    description: 'clone of the rewards page from Starbucks website.',
    stack: 'Typescript, react, styled-components, react-final-form.',
    imagePreview: 'images/projects/starbucks-rewards.thumb.jpg',
    imageFull: 'images/projects/starbucks-rewards.png',
    github: 'https://github.com/pavel-s/react-starbucks-rewards',
  },
  {
    title: 'Netflix',
    description:
      'clone of home, login (with authorization), profiles, browse pages.',
    stack:
      'Typescript, react, styled-components, formik, react-router, firebase.',
    imagePreview: 'images/projects/netflix.thumb.jpg',
    imageFull: 'images/projects/netflix.png',
    github: 'https://github.com/pavel-s/netflix',
  },
];

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
      <Container maxW={{ base: 'full', md: 'container.lg' }} m='auto' p='1rem'>
        <Heading as='h1' lineHeight='1.2'>
          Hello, I'am{' '}
          <Text as='span' color={linkColor}>
            Pavel Sergeev
          </Text>
          , Frontend React Developer!
        </Heading>
        <Text mt='1rem'>
          I work with stack: react, redux-toolkit, styled-components,
          material-ui, chakra-ui, formik, typescript and have plans to develop
          as a full stack developer (node.js/express backend)
        </Text>
        <Heading as='h2' mt='4rem' fontSize='1.4rem' mb='1rem'>
          My Projects:
        </Heading>
        <List>
          {projects.map((project, i) => (
            <ListItem display={{ md: 'flex' }} mb='1rem' key={i}>
              <Box>
                <IconButton
                  onClick={() => {
                    setCurrentFullImage(project.imageFull);
                    onOpen();
                  }}
                  aria-label='open full image'
                  w='10rem'
                  h='auto'
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
                  <Link
                    href='https://starbucks-rewards-copy.herokuapp.com/'
                    color={linkColor}
                    fontWeight='bold'
                  >
                    {project.title}
                  </Link>{' '}
                  - {project.description}
                </Text>
                <Text mt='0.4rem'>{project.stack}</Text>
                <Box mt='1rem'>
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
