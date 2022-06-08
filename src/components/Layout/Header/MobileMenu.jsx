import {
  Button,
  List,
  ListItem,
  Collapse,
  Icon,
  useDisclosure,
} from "@chakra-ui/react";

import { ChevronDownIcon } from "@chakra-ui/icons";

import NavLink from "./NavLink";

export default function MobileMenu({ label, href, childrens, onClick }) {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <ListItem>
      {childrens ? (
        <>
          <Button w="100%" py=".5rem" variant="link" onClick={onToggle}>
            {label}
            <Icon
              as={ChevronDownIcon}
              transition="all .25s ease-in-out"
              transform={isOpen ? "rotate(180deg)" : ""}
              w={6}
              h={6}
              ml="auto"
            />
          </Button>
          <Collapse in={isOpen} unmountOnExit>
            <List pl="1rem" borderLeft="1px" borderColor="gray.200">
              {childrens.map((childdata, index) => (
                <MobileMenu key={index} {...childdata} onClick={onClick} />
              ))}
            </List>
          </Collapse>
        </>
      ) : (
        <NavLink href={href} onClick={onClick}>
          {label}
        </NavLink>
      )}
    </ListItem>
  );
}
