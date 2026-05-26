import coordinate from "./coordinate";
import { Instruction, toInstruction } from "./instruction";
import { abstractMotion, move, turnLeft, turnRight } from "./motion";

const motionMap: Record<Instruction, abstractMotion> = {
  [Instruction.M]: move,
  [Instruction.L]: turnLeft,
  [Instruction.R]: turnRight,
};

export const performMotion = (
  initialCoOrdinate: coordinate,
  instruction: string,
): coordinate => {
  return motionMap[toInstruction(instruction)](initialCoOrdinate);
};
