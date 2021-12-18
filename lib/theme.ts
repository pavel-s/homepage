import { extendTheme, ThemeConfig, Theme } from '@chakra-ui/react';

const config: ThemeConfig = {
  initialColorMode: 'system',
  useSystemColorMode: false,
};

const extensions = {
  config,
};

// use type casting since extendTheme return just Dict<any> type
const theme = extendTheme(extensions) as Theme & typeof extensions;

export default theme;
