import { EmulatorTypes } from "./EmulatorTypes";

export type Rom = {
  id: number;
  name: string;
  file_size: string;
  platforms: EmulatorTypes;
  download_links: string;
};
