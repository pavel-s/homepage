import {
  Badge,
  Box,
  IconButton,
  Link,
  ListItem,
  useColorMode,
  Text,
  Image,
} from '@chakra-ui/react';
import React from 'react';
import { IProject } from '../lib/types';

interface IProjectCardProps {
  project: IProject;
  showFullImage?: (src: string) => void;
}

const ProjectCard = ({ project, showFullImage }: IProjectCardProps) => {
  const { colorMode } = useColorMode();

  const linkColor = colorMode === 'light' ? 'darkblue' : 'lightblue';

  const handleImageClick = () =>
    project.imageFull &&
    showFullImage &&
    showFullImage(
      typeof project.imageFull === 'string'
        ? project.imageFull
        : project.imageFull[0]
    );

  return (
    <ListItem display={{ md: 'flex' }} mb={6}>
      <Box>
        <IconButton
          onClick={handleImageClick}
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
            alt={project.title}
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
  );
};

export default ProjectCard;
