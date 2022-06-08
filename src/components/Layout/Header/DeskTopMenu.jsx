import {
  Button,
  List,
  ListItem,
  Popover,
  Icon,
  PopoverTrigger,
  PopoverContent,
  useDisclosure,
} from "@chakra-ui/react";

import { ChevronDownIcon, ChevronRightIcon } from "@chakra-ui/icons";

import NavLink from "./NavLink";

export default function DeskTopMenu({
  label,
  href,
  childrens,
  depthLevel,
  onClick,
}) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const placement = depthLevel > 0 ? "right-start" : "bottom";

  return (
    <ListItem>
      {childrens ? (
        <Popover
          isOpen={isOpen}
          onOpen={onOpen}
          onClose={onClose}
          trigger="hover"
          gutter={0}
          placement={placement}
        >
          <PopoverTrigger>
            <Button
              py={depthLevel > 0 ? ".5rem" : "1rem"}
              _hover={
                depthLevel > 0 ? { bg: "gray.100" } : { color: "gray.600" }
              }
              p="1rem"
              w="100%"
              justifyContent="space-between"
              variant="link"
            >
              {label}
              <Icon
                as={depthLevel > 0 ? ChevronRightIcon : ChevronDownIcon}
                w={5}
                h={5}
                ml={1}
              />
            </Button>
          </PopoverTrigger>
          <PopoverContent width="inherit" minW="10rem" bg="white" p=".5rem">
            <List>
              {(depthLevel = depthLevel + 1)}
              {childrens.map((childdata, index) => (
                <DeskTopMenu
                  key={index}
                  {...childdata}
                  depthLevel={depthLevel}
                  onClick={onClose}
                />
              ))}
            </List>
          </PopoverContent>
        </Popover>
      ) : (
        <NavLink
          _hover={depthLevel > 0 ? { bg: "gray.100" } : { color: "gray.600" }}
          href={href}
          onClick={onClick}
          borderRadius="4"
        >
          {label}
        </NavLink>
      )}
    </ListItem>
  );
}
