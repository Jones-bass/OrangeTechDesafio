import { Box } from "@chakra-ui/react";

export function Card({ children }: any) {
  return (
    <Box backgroundColor="#FFFFFF"  borderRadius="25px" padding="50px">
      { children }
    </Box>
  );
};
