# starship

## Requirements

As a user I'd like to be able to pull the following data via a REST or GraphQL endpoint:

- The height and weight for a single Pokémon (i.e. Pikachu).
- The height and weight for a list of Pokémon.
- The mean, median, and mode of the heights for a list of Pokémon.
- The mean, median, and mode of the width for a list of Pokémon.

## Microservice

Retrieve single pokemon
https://pokeapi.co/api/v2/pokemon/<pokemon-name>

## REST Design

Considering that there is an unknown number of Pokemon, a POST API is appropriate even though data is being fetched; the JSON body will give the ability to proviee an array of Pokemon

One POST API can be made for both single Pokemon and a list of Pokemon

Mean, mediun, and mode of heights / weights will be returned for all; in case of a single pokemon they will just reflect the one Pokemon

## Not Included In The Project

### Unit Testing
