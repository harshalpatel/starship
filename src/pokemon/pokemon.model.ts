import { max } from "class-validator";
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

    this.modeHeight = this.modeOfArray(heights);
    this.modeWeight = this.modeOfArray(weights);
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

  private modeOfArray(array: number[]): number[] {
    const modeCounter = new Map<number, number>();
    const modes: number[] = [];
    let maxCount = 0;

    array.forEach((number) => {
      const occurenceCount = modeCounter.has(number)
        ? modeCounter.get(number) + 1
        : 1;
      modeCounter.set(number, occurenceCount);

      if (occurenceCount > maxCount) {
        maxCount = occurenceCount;
      }
    });

    for (let [number, occurentCount] of modeCounter) {
      if (occurentCount === maxCount) {
        modes.push(number);
      }
    }

    return modes;
  }
}
