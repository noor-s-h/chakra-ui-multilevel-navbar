import { extendTheme } from "@chakra-ui/react";

import config from "./config";
import fonts from "./fonts";
import colors from "./colors";
import breakpoints from "./breakpoints";

import Button from "./button";
import Link from "./link";

const theme = extendTheme({
  config,
  fonts,
  colors,
  breakpoints,
  components: {
    Button,
    Link,
  },
});

export default theme;
