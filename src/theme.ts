import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
  styles: {
    global: {
      '*:focus': {
        boxShadow: 'none!important',
      },
      '*:focus-visible': {
        boxShadow: 'var(--chakra-shadows-outline)!important',
      },
    },
  },
});
