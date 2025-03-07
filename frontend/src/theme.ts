import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  colors: {
    brand: {
      50: '#f5e9ff',
      100: '#dbc1ff',
      200: '#c198ff',
      300: '#a770ff',
      400: '#8d48ff',
      500: '#742fff',
      600: '#5a24cc',
      700: '#411a99',
      800: '#291066',
      900: '#120633'
    }
  },
  fonts: {
    heading: 'Inter, sans-serif',
    body: 'Inter, sans-serif'
  },
  components: {
    Button: {
      defaultProps: {
        colorScheme: 'brand'
      }
    }
  }
});

export default theme; 