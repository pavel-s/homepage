// import '../styles/globals.css';
import type { AppProps } from 'next/app';
// import { ColorModeScript } from '@chakra-ui/react';
import Chakra from '../lib/chakra';

// interface MyAppProps extends AppProps {
//   cookie: string;
// }

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Chakra cookies={pageProps.cookie}>
      <Component {...pageProps} />
    </Chakra>
  );
}

export { getServerSideProps } from './../lib/chakra';

export default MyApp;
