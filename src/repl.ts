import { createInterface } from "readline";

export function startREPL() {
  const rl = createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: "Pokedex > ",
  });

  rl.prompt();

  rl.on("line", (input) => {
    const wordArr = cleanInput(input);
    if (wordArr.length === 0) {
      rl.prompt();
      return;
    }
    console.log(`Your command was: ` + wordArr[0]);
    rl.prompt();
  });
}

export function cleanInput(input: string): string[] {
  return input.trim().toLowerCase().split(/\s+/);
}
