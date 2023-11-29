import { memo } from "react";
import { Rom } from "../../../types/RomsTypes";

import {
  Box,
  Center,
  Text,
  Stack,
  Button,
  useColorModeValue,
  Flex,
  List,
  ListItem,
} from "@chakra-ui/react";
import { motion } from "framer-motion";

const RomCard = memo(
  ({
    name,

    file_size,
    download_links,
  }: Rom) => {
    let filteredName = name;

    // Utilisation d'une expression régulière pour extraire tous les textes entre parenthèses
    const correspondances = filteredName.match(/\((.*?)\)/g);

    // Tableau pour stocker les textes entre parenthèses
    const textesEntreParentheses: string[] = [];

    // Si des correspondances sont trouvées, les stocker dans le tableau et les supprimer du titre
    if (correspondances) {
      correspondances.forEach((correspondance) => {
        const texteEntreParentheses = correspondance.slice(1, -1); // Supprimer les parenthèses
        textesEntreParentheses.push(texteEntreParentheses);
        filteredName = filteredName.replace(correspondance, "").trim();
      });
    }

    return (
      <Center
        whileHover={{ scale: 1.05 }}
        whileTap={{
          scale: 0.9,
          borderRadius: "100%",
        }}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={".3s"}
        as={motion.div}
        w={"330px"}
        height={"510px"}
        py={6}
      >
        <Box
          maxW={"330px"}
          height={"100%"}
          w={"full"}
          bg={useColorModeValue("gray.50", "gray.700")}
          boxShadow={"xl"}
          rounded={"md"}
          overflow={"hidden"}
        >
          <Stack
            height={"60%"}
            textAlign={"center"}
            p={6}
            color={useColorModeValue("gray.800", "white")}
            align={"center"}
          >
            <Text
              bg={useColorModeValue("gray.200", "gray.600")}
              fontSize={"sm"}
              fontWeight={500}
              p={2}
              px={3}
              rounded={"full"}
            >
              {file_size}
            </Text>
            <Stack direction={"row"} align={"center"} justify={"center"}>
              <Text fontSize={"3xl"} fontWeight={800}>
                {filteredName.slice(0, 35)}
                {filteredName.length >= 35 && "..."}
              </Text>
            </Stack>
          </Stack>

          <Flex
            flexDirection={"column"}
            justifyContent={"space-between"}
            height={"40%"}
            bg={useColorModeValue("gray.300", "gray.900")}
            px={10}
            py={5}
          >
            <List>
              {textesEntreParentheses.map((el, index) => {
                return (
                  <ListItem key={index}>
                    <Text>{el}</Text>
                  </ListItem>
                );
              })}
            </List>

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
);

export default RomCard;
