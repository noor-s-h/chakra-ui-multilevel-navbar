const Link = {
  baseStyle: {
    fontWeight: "semibold",
    color: "gray.500",
    _focus: { boxShadow: "none" },
    _hover: {
      textDecoration: "none",
      color: "gray.600",
    },
  },
  variants: {
    cute: {
      fontWeight: "semibold",
      color: "gray.500",
      border: "1px",
      borderColor: "gray.200",
      boxShadow: "inner",
      borderRadius: "6",
      _hover: {
        bg: "gray.50",
      },
    },
  },
};

export default Link;
