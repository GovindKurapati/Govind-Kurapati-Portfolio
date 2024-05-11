import { Flex } from '@chakra-ui/react';
import type { ReactNode } from 'react';

import Footer from './Footer';
import Header from './Header';
import Meta from './Meta';

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <Flex margin="0" transition="0.5s ease-out">
      <Meta />
      <Flex wrap="wrap" w="100%">
        <Header />
        <Flex width="full" as="main" height="100%">
          {children}
        </Flex>
        <Footer />
      </Flex>
    </Flex>
  );
};

export default Layout;
