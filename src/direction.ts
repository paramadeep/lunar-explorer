export enum Direction {
  N = "N",
  S = "S",
  E = "E",
  W = "W",
}

export function toDirection(s: string): Direction {
  if ((Object.values(Direction) as string[]).includes(s)) return s as Direction;
  throw new Error(`Invalid direction: ${s}`);
}
