import coordinate from "./coordinate";
import { Instruction } from "./instruction";
import { abstractMotion, move, turnLeft, turnRight } from "./motion";

const { M, L, R } = Instruction;

const motionMap: Record<Instruction, abstractMotion> = {
  [M]: move,
  [L]: turnLeft,
  [R]: turnRight,
};

export const performMotion = (
  initialCoOrdinate: coordinate,
  instruction: Instruction,
  maxX: number,
  maxY: number,
): coordinate => {
  const motionFunction = motionMap[instruction];
  return motionFunction(initialCoOrdinate, maxX, maxY);
};
