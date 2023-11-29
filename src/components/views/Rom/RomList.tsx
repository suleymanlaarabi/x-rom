import { Button, Flex } from "@chakra-ui/react";
import { Rom } from "../../../types/RomsTypes";
import RomCard from "../../common/Card/RomCard";
import { useState } from "react";

type RomsListProps = {
  roms: Rom[];
};
const RomList = ({ roms }: RomsListProps) => {
  const [numberLoaded, setNumberLoaded] = useState(4);
  return (
    <>
      <Flex justifyContent={"center"} gap={18} wrap={"wrap"}>
        {roms.slice(0, numberLoaded).map((rom) => {
          return <RomCard key={rom.id} {...rom} />;
        })}
      </Flex>
      <Button onClick={() => setNumberLoaded((current) => current + 4)}>
        Load more
      </Button>
    </>
  );
};

export default RomList;
