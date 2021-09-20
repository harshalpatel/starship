export class PokemonInformationView {
  medianHeight: number;
  medianWeight: number;
  averageHeight: number;
  averageWeight: number;
  modeHeight: number[];
  modeWeight: number[];
  pokemon: Pokemon;
}

export class PokemonDetails {
  height: number;
  weight: number;
}

export class Pokemon {
  [pokemon: string]: PokemonDetails;
}
