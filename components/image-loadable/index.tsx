import { Button } from '@chakra-ui/button';
import { Image } from '@chakra-ui/image';
import { Box, HStack, Text } from '@chakra-ui/layout';
import { CircularProgress } from '@chakra-ui/progress';
import styled from '@emotion/styled';
import React, { FC, useState } from 'react';

const Img = styled(Image, {
  shouldForwardProp: (propName) => propName !== 'loaded',
})<{
  loaded: boolean;
}>`
  opacity: ${({ loaded }) => (loaded ? '1' : '0')};
  transition: opacity 0.3s ease;
`;

const ImageLoadable: FC<React.ComponentProps<typeof Image>> = ({ ...rest }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isError, setIsError] = useState(false);

  return isError ? (
    <HStack>
      <Text>Image loading failed😞</Text>
      <Button
        onClick={() => {
          setIsError(false);
        }}
      >
        Try again
      </Button>
    </HStack>
  ) : (
    <Box position='relative'>
      {!isLoaded && (
        <Box position='absolute'>
          Loading...
          <CircularProgress isIndeterminate size='2rem' ml='1rem' />
        </Box>
      )}
      <Img
        {...rest}
        loaded={isLoaded}
        onLoad={() => {
          setIsError(false);
          setIsLoaded(true);
        }}
        onError={() => {
          setIsError(true);
          setIsLoaded(false);
        }}
      />
    </Box>
  );
};

export default ImageLoadable;
