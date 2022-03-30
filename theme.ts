import { extendTheme, theme as DEFAULT_THEME } from "@chakra-ui/react";

const theme = extendTheme({
  config: {
    initialColorMode: "dark",
    useSystemColorMode: false,
  },
  fonts: {
    heading: "Verdana",
    body: "Georgia",
  },
  styles: {
    global: {
      body: {
        bgGradient: "",
      },
    },
  },
  colors: {
    cyan: {
      50: "#EDFDFD",
      100: "#C4F1F9",
      200: "#9DECF9",
      300: "#76E4F7",
      400: "#0BC5EA",
      500: "#00B5D8",
      600: "#00A3C4",
      700: "#0987A0",
      800: "#086F83",
      900: "#065666",
    },
  },
  components: {
    Avatar: {
      baseStyle: {
        container: {
          bgGradient: "linear(to-r, purple.300, green.300)",
          // border: "2px solid var(--chakra-colors-purple-300)"
        },
      },
    },
    Textarea: {
      defaultProps: {
        focusBorderColor: "green.200",
      },
    },
    Spinner: {
      baseStyle: {
        color: "green.200",
      },
    },
  },
  shadows: {
    outline: "0 0 0 3px var(--chakra-colors-green-200) !important",
  },
});

export default theme;
