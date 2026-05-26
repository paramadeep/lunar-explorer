export enum Direction {
  N = "N",
  S = "S",
  E = "E",
  W = "W",
}

const possibleDirections = Object.values(Direction) as string[];

export function toDirection(s: string): Direction {
  if (possibleDirections.includes(s)) return s as Direction;
  throw new Error(`Invalid direction: ${s}`);
}
