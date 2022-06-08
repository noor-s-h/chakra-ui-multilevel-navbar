import Header from "./Header";

import { Container } from "@chakra-ui/react";

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <Container maxW="5xl" fontWeight="semibold" color="gray.500" pt={4}>
        {children}
      </Container>
    </>
  );
}
