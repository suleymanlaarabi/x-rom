import { useParams } from "react-router-dom";
import { Heading } from "@chakra-ui/react";
const Emulator = () => {
  const { name } = useParams();
  return (
    <>
      <Heading>Emulator: {name}</Heading>
    </>
  );
};

export default Emulator;
