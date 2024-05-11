import { extendTheme } from '@chakra-ui/react';
import type { StyleFunctionProps } from '@chakra-ui/styled-system';
import { mode } from '@chakra-ui/theme-tools';

import { config } from './config';

const styles = {
  global: (props: StyleFunctionProps) => ({
    body: {
      color: mode('gray.800', 'whiteAlpha.900')(props),
      bg: mode('#F5F5F5', '#141214')(props),
      // bgGradient: mode('radial(gray.500 1px, transparent 0)', '')(props),
      // bgSize: mode('40px 40px', '')(props),
      // bgPosition: mode('-30px -30px', '')(props),
      scrollBehaviour: mode('smooth', 'smooth')(props),
    },
  }),
};

export const theme = extendTheme({
  colors: {
    light: {
      main: '#F5F5F5',
      font: 'whiteAlpha.900',
      badge: '#D9D9D9',
    },
    dark: {
      100: '#141214',
      font: 'gray.800',
    },
  },
  fonts: {
    heading: 'Plus Jakarta Sans, sans-serif',
    body: 'Plus Jakarta Sans, sans-serif',
  },
  components: {
    Button: {
      variants: {
        'with-shadow': {
          bg: 'red.400',
          boxShadow: '0 0 2px 2px #efdfde',
        },
        // 4. We can override existing variants
        solid: (props: StyleFunctionProps) => ({
          bg: mode('gray.800', '#F5F5F5')(props),
          color: mode('#F5F5F5', 'gray.800')(props),
        }),
      },
    },
  },
  styles,
  config,
});
