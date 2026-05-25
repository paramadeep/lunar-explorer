import coOrdinate from "./coOrdinate";
import { abstractMotion, move, turnLeft, turnRight } from "./motion";

const motionMap: Record<string, abstractMotion> = {
  "M": move,
  "L": turnRight,
  "R": turnLeft
}

export const performMotion = (initialCoOrdinate: coOrdinate, instruction: string) : coOrdinate => { 
  return motionMap[instruction](initialCoOrdinate)
}