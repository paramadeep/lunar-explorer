import coOrdinate from "./coOrdinate";
import { abstractMotion, move, turnLeft, turnRight } from "./motion";

const motionMap: Record<string, abstractMotion> = {
  "M": move,
  "L": turnLeft,
  "R": turnRight
}

export const performMotion = (initialCoOrdinate: coOrdinate, instruction: string) : coOrdinate => { 
  return motionMap[instruction](initialCoOrdinate)
}


