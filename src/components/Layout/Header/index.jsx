import {
  Box,
  Container,
  Flex,
  IconButton,
  List,
  useDisclosure,
  Collapse,
} from "@chakra-ui/react";

import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";

import NavData from "@/data/NavData";
import MobileMenu from "./MobileMenu";
import DeskTopMenu from "./DeskTopMenu";
import Logo from "./Logo";
import AuthBtn from "./AuthBtn";
import useMediaQuery from "@/lib/useMediaQuery";

export default function Header() {
  const { isOpen, onToggle, onClose } = useDisclosure();
  const isDeskTop = useMediaQuery("(min-width: 52em)");
  const isMobile = useMediaQuery("(max-width: 52em)");

  return (
    <Box position="sticky" top={0} zIndex={1} bg="white">
      <Container maxW="5xl">
        <Flex
          as="nav"
          borderBottom="1px"
          borderColor="gray.200"
          h={{ base: "3rem", md: "4rem" }}
          align="center"
          justify="space-between"
        >
          {isMobile && (
            <IconButton
              ml="-3"
              onClick={onToggle}
              icon={
                isOpen ? (
                  <CloseIcon w={3} h={3} />
                ) : (
                  <HamburgerIcon w={5} h={5} />
                )
              }
              variant="unstyled"
              aria-label="Toggle Navigation"
            />
          )}
          <Logo onClick={onClose} />
          {isDeskTop && (
            <List display="flex" alignItems="center">
              {NavData.map((navdata, index) => {
                const depthLevel = 0;
                return (
                  <DeskTopMenu
                    key={index}
                    {...navdata}
                    depthLevel={depthLevel}
                  />
                );
              })}
            </List>
          )}
          <AuthBtn onClick={onClose} />
        </Flex>
        {isMobile && (
          <Collapse in={isOpen} unmountOnExit>
            <List
              display="flex"
              flexDirection="column"
              borderBottom="1px"
              borderColor="gray.200"
            >
              {NavData.map((navdata, index) => (
                <MobileMenu key={index} {...navdata} onClick={onClose} />
              ))}
            </List>
          </Collapse>
        )}
      </Container>
    </Box>
  );
}
