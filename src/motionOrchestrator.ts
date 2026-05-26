import coordinate from "./coordinate";
import { Instruction, toInstruction } from "./instruction";
import { abstractMotion, move, turnLeft, turnRight } from "./motion";

const { M, L, R } = Instruction;

const motionMap: Record<Instruction, abstractMotion> = {
  [M]: move,
  [L]: turnLeft,
  [R]: turnRight,
};

export const performMotion = (
  initialCoOrdinate: coordinate,
  instruction: string,
): coordinate => {
  return motionMap[toInstruction(instruction)](initialCoOrdinate);
};
