const Button = {
  baseStyle: {
    color: "gray.500",
    _hover: {
      color: "gray.600",
    },
    _focus: {
      boxShadow: "none",
    },
  },
  variants: {
    link: {
      color: "gray.500",
      _hover: {
        textDecoration: "none",
      },
    },
    unstyled: {
      color: "gray.500",
    },
    cute: {
      border: "1px",
      borderColor: "gray.200",
      boxShadow: "inner",
    },
  },
};

export default Button;
