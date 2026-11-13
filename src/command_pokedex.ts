import type { State } from "./state.ts";

export async function commandPokedex(state: State) {
  if (Object.keys(state.pokedex).length === 0) {
    console.log("You have not caught any pokemon yet.");
    return;
  }
  console.log("Your Pokedex:");
  for (const pokemon in state.pokedex) {
    console.log(` - ${pokemon}`);
  }
}
