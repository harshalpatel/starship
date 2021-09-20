import { PokemonDto } from "../respoisitories/pokemon/pokemon.dto";
import { Pokemon, PokemonInformationView } from "./pokemon.view";

export class PokemonInformationModel extends PokemonInformationView {
  constructor(pokemonDtoArray: PokemonDto[]) {
    super();

    const heights: number[] = [];
    const weights: number[] = [];
    const pokemonInformationMap: Pokemon = {};

    pokemonDtoArray.forEach((pokemonDto) => {
      heights.push(pokemonDto.height);
      weights.push(pokemonDto.weight);

      pokemonInformationMap[pokemonDto.name] = {
        height: pokemonDto.height,
        weight: pokemonDto.weight,
      };
    });

    this.averageHeight = this.averageOfArray(heights);
    this.averageWeight = this.averageOfArray(weights);

    const sortedHeights = heights.sort((a: number, b: number) => a - b);
    const sortedWeights = weights.sort((a: number, b: number) => a - b);

    this.medianHeight = this.medianOfArray(sortedHeights);
    this.medianWeight = this.medianOfArray(sortedWeights);

    this.pokemon = pokemonInformationMap;
  }

  private averageOfArray(array: number[]): number {
    return array.reduce((a: number, b: number) => a + b) / array.length;
  }

  private medianOfArray(sortedArray: number[]): number {
    const middleElement = Math.floor(sortedArray.length / 2);
    // For even number of elements, take average of middle and the element prior since its zero based
    if (sortedArray.length % 2 === 0) {
      return (sortedArray[middleElement - 1] + sortedArray[middleElement]) / 2;
    }

    return sortedArray[middleElement];
  }
}
