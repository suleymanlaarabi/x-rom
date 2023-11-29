import { BrandTypes } from "../types/BrandTyps";
import { EmulatorTypes } from "../types/EmulatorTypes";

type Platforms = {
  name: BrandTypes;
  children: EmulatorTypes[];
}[];

const {
  // -- Nintendo --
  Gameboy,
  Nintendo64,
  Nintendo3DS,
  NintendoWii,
  NintendoDS,
  NintendoGameCube,
  GameboyAdvance,
  GameboyColor,
  NES,
  // -- Xbox --
  Xbox360,
  Xbox,
  // -- PlayStation --
  PS1,
  PS2,
  PS3,
  PSV,
} = EmulatorTypes;

const { Nintendo, Xbox: Microsoft, PlayStaion } = BrandTypes;

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
      NES,
    ],
  },
  {
    name: Microsoft,
    children: [Xbox360, Xbox],
  },
  {
    name: PlayStaion,
    children: [PS1, PS2, PS3, PSV],
  },
];
