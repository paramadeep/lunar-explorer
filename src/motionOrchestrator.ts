import coordinate from "./coordinate";
import { abstractMotion, move, turnLeft, turnRight } from "./motion";

const motionMap: Record<string, abstractMotion> = {
  M: move,
  L: turnLeft,
  R: turnRight,
};

export const performMotion = (
  initialCoOrdinate: coordinate,
  instruction: string,
): coordinate => {
  return motionMap[instruction](initialCoOrdinate);
};
