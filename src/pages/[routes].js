import { Text } from "@chakra-ui/react";
import { useRouter } from "next/router";

export default function Routes() {
  const router = useRouter();
  const { routes } = router.query;

  return <Text casing="capitalize">{routes}</Text>;
}
