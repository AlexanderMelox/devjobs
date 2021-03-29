import { mode } from '@chakra-ui/theme-tools';

const styles = {
  global: (props: any) => ({
    '*, *::before, *::after': {
      margin: 0,
      padding: 0,
      boxSizing: 'border-box',
    },
    html: {
      fontSize: '62.5%',
    },
    body: {
      fontSize: props.theme.fontSizes.md,
      fontFamily: `'Kumbh Sans', sans-serif`,
      color: mode(
        theme.colors.primary.veryDarkBlue,
        theme.colors.secondary.gray
      )(props),
      backgroundColor: mode('secondary.lightGray', 'primary.midnight')(props),
    },
  }),
};

const theme: any = {
  styles,
  colors: {
    primary: {
      violet: '#5964E0',
      lightViolet: '#939BF4',
      veryDarkBlue: '#19202D',
      midnight: '#121721',
    },
    secondary: {
      white: '#ffffff',
      lightGray: '#F4F6F8',
      gray: '#9DAEC2',
      darkGray: '#6E8098',
    },
  },
  fonts: {
    primary: `'Kumbh Sans', sans-serif`,
  },
  fontSizes: {
    sm: '0.875rem',
    md: '1.6rem',
    lg: '1.25rem',
    xl: '',
  },
  config: {
    useSystemColorMode: false,
    initialColorMode: 'dark',
  },
};

export default theme;
