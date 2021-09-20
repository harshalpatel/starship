export class PokemonInformationView {
  medianHeight: number;
  medianWeight: number;
  averageHeight: number;
  averageWeight: number;
  modeHeight: number[];
  modeWeight: number[];
  pokemon: Pokemon;
}

export interface PokemonDetails {
  height: number;
  weight: number;
}

export interface Pokemon {
  [pokemon: string]: PokemonDetails;
}
