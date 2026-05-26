export enum Instruction {
  M = "M",
  L = "L",
  R = "R",
}

const possibleInstructions = Object.values(Instruction) as string[]

export function toInstruction(s: string): Instruction {
  if ((possibleInstructions).includes(s)) return s as Instruction;
  throw new Error(`Invalid instruction: ${s}`);
}
