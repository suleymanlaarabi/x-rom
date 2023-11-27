import { urls } from "../../data/url";
import { EmulatorTypes } from "../../types/EmulatorTypes";
import axios from "axios";
import { Rom } from "../../types/RomsTypes";
export async function getRoms(
  platforms: EmulatorTypes | undefined
): Promise<Rom[]> {
  let result;

  if (platforms) {
    result = await axios.get(
      urls.directus +
        "items/roms?filter[platforms][_eq]=" +
        platforms +
        "&limit=9000"
    );
  } else {
    result = await axios.get(urls.directus + "items/roms");
  }
  return result.data.data;
}
