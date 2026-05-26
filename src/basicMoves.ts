import coordinate from "./coordinate";
import { Direction, toDirection } from "./direction";

const rightSideMap: Record<Direction, Direction> = {
  [Direction.N]: Direction.E,
  [Direction.E]: Direction.S,
  [Direction.S]: Direction.W,
  [Direction.W]: Direction.N,
};

const leftSideMap: Record<Direction, Direction> = {
  [Direction.N]: Direction.W,
  [Direction.E]: Direction.N,
  [Direction.S]: Direction.E,
  [Direction.W]: Direction.S,
};

const xIncrementerMap: Record<Direction, number> = {
  [Direction.N]: 0,
  [Direction.S]: 0,
  [Direction.E]: 1,
  [Direction.W]: -1,
};

const yIncrementerMap: Record<Direction, number> = {
  [Direction.N]: -1,
  [Direction.S]: 1,
  [Direction.E]: 0,
  [Direction.W]: 0,
};

function getRightSide(facingDirection: string): Direction {
  return rightSideMap[toDirection(facingDirection)];
}

function getLeftSide(facingDirection: string): Direction {
  return leftSideMap[toDirection(facingDirection)];
}

function getNewXIfValid(initialCoOrdinate: coordinate): number {
  const dir = toDirection(initialCoOrdinate.facingDirection);
  return initialCoOrdinate.x + xIncrementerMap[dir];
}

function getNewYIfValid(initialCoOrdinate: coordinate): number {
  const dir = toDirection(initialCoOrdinate.facingDirection);
  return initialCoOrdinate.y + yIncrementerMap[dir];
}

export { getRightSide, getLeftSide, getNewXIfValid, getNewYIfValid };
