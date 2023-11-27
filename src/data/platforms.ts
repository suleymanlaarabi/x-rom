import { BrandTypes } from "../types/BrandTyps";
import { EmulatorTypes } from "../types/EmulatorTypes";

type Platforms = {
  name: BrandTypes;
  children: EmulatorTypes[];
}[];

const {
  Gameboy,
  Nintendo64,
  Nintendo3DS,
  NintendoWii,
  NintendoDS,
  NintendoGameCube,
  GameboyAdvance,
  GameboyColor,
  Xbox360,
} = EmulatorTypes;

const { Nintendo, Xbox } = BrandTypes;

export const platforms: Platforms = [
  {
    name: Nintendo,
    children: [
      Gameboy,
      GameboyColor,
      GameboyAdvance,
      Nintendo3DS,
      NintendoWii,
      Nintendo64,
      NintendoDS,
      NintendoGameCube,
    ],
  },
  {
    name: Xbox,
    children: [Xbox360],
  },
];
