import NavLink from "./NavLink";
import { Flex } from "@chakra-ui/react";

import useMediaQuery from "@/lib/useMediaQuery";

export default function AuthBtn({ onClick }) {
  const isDeskTop = useMediaQuery("(min-width: 52em)");

  return (
    <Flex>
      <NavLink href="/login" onClick={onClick}>
        Login
      </NavLink>
      {isDeskTop && (
        <NavLink variant="cute" href="/signup">
          Signup
        </NavLink>
      )}
    </Flex>
  );
}
