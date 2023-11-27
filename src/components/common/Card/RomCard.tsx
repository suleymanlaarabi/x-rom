import { Rom } from "../../../types/RomsTypes";

import {
  Box,
  Center,
  Text,
  Stack,
  Button,
  useColorModeValue,
  Flex,
} from "@chakra-ui/react";

export default function RomCard({
  name,
  platforms,
  file_size,
  download_links,
}: Rom) {
  return (
    <Center height={"450px"} py={6}>
      <Box
        maxW={"330px"}
        height={"100%"}
        w={"full"}
        bg={useColorModeValue("white", "gray.800")}
        boxShadow={"2xl"}
        rounded={"md"}
        overflow={"hidden"}
      >
        <Stack
          height={"65%"}
          textAlign={"center"}
          p={6}
          color={useColorModeValue("gray.800", "white")}
          align={"center"}
        >
          <Text fontSize={"sm"} fontWeight={500} p={2} px={3} rounded={"full"}>
            {platforms}
          </Text>
          <Stack direction={"row"} align={"center"} justify={"center"}>
            <Text fontSize={"3xl"} fontWeight={800}>
              {name.slice(0, 35)}
              {name.length >= 35 && "..."}
            </Text>
          </Stack>
        </Stack>

        <Flex
          flexDirection={"column"}
          height={"35%"}
          bg={useColorModeValue("gray.50", "gray.900")}
          px={10}
          py={5}
        >
          <Text>{file_size}</Text>

          <Button
            mt={3}
            w={"full"}
            minH={35}
            rounded={"xl"}
            onClick={() => {
              window.open(download_links);
            }}
          >
            Download
          </Button>
        </Flex>
      </Box>
    </Center>
  );
}
