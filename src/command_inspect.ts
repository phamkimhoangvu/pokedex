import { State } from "./state.js";

export async function commandInspect(state: State, ...args: string[]) {
  if (args[0] === undefined) {
    throw new Error("You must provide a pokemon name!");
  }
  const name = args[0];
  if (!(name in state.pokedex)) {
    console.log("You have not caught this pokemon!");
  }
  console.log(`Name: ${state.pokedex[name].name}`);
  console.log(`Height: ${state.pokedex[name].height}`);
  console.log(`Weight: ${state.pokedex[name].weight}`);
  console.log(`Stats:`);
  for (const statNumber of state.pokedex[name].stats) {
    console.log(`   -${statNumber.stat.name}: ${statNumber.base_stat}`);
  }
  console.log(`Types:`);
  for (const typeName of state.pokedex[name].types) {
    console.log(`   - ${typeName.type.name}`);
  }
}
