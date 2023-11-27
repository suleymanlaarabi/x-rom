import { useParams } from "react-router-dom";
import { Heading, Input } from "@chakra-ui/react";
import { getRoms } from "../../../services/fetch/directus";
import { EmulatorTypes } from "../../../types/EmulatorTypes";
import { useQuery } from "react-query";
import RomList from "./RomList";
import { useState } from "react";
const Rom = () => {
  const { name } = useParams<{ name: EmulatorTypes }>();
  const { data } = useQuery(["roms", name], () => getRoms(name));
  const [search, setSearch] = useState("");
  const filteredData = data?.filter((rom) =>
    rom.name.toLowerCase().includes(search.toLowerCase())
  );
  return (
    <>
      <Heading>Rom: {name}</Heading>
      <Input
        onChange={(e) => setSearch(e.target.value)}
        value={search}
        w={300}
        m={5}
        type="text"
        placeholder="Search"
      />
      {filteredData && <RomList roms={filteredData} />}
    </>
  );
};

export default Rom;
