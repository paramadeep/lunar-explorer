export enum Instruction {
  M = "M",
  L = "L",
  R = "R",
}

export function toInstruction(s: string): Instruction {
  if ((Object.values(Instruction) as string[]).includes(s)) return s as Instruction;
  throw new Error(`Invalid instruction: ${s}`);
}
