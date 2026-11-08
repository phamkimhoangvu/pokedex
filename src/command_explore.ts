import { State } from "./state.js";

export async function commandExplore(state: State, ...args: string[]) {
  if (args[0] === undefined) {
    throw new Error("You must provide a location name!");
  }
  const name = args[0];
  console.log(`Exploring ${name}...`);
  const encounters = (await state.pokeAPI.fetchLocation(name)).pokemon_encounters;
  console.log("Found Pokemon:");
  for (const encounter of encounters) {
    console.log(` - ${encounter.pokemon.name}`);
  }
}
