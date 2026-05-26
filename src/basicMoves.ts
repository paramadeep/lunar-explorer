import coordinate from "./coordinate";
import { Direction } from "./direction";

const { N, S, E, W } = Direction;

const rightSideMap: Record<Direction, Direction> = {
  [N]: E,
  [E]: S,
  [S]: W,
  [W]: N,
};

const leftSideMap: Record<Direction, Direction> = {
  [N]: W,
  [E]: N,
  [S]: E,
  [W]: S,
};

const xIncrementerMap: Record<Direction, number> = {
  [N]: 0,
  [S]: 0,
  [E]: 1,
  [W]: -1,
};

const yIncrementerMap: Record<Direction, number> = {
  [N]: -1,
  [S]: 1,
  [E]: 0,
  [W]: 0,
};

function getRightSide(facingDirection: Direction): Direction {
  return rightSideMap[facingDirection];
}

function getLeftSide(facingDirection: Direction): Direction {
  return leftSideMap[facingDirection];
}

function getNewXIfValid(initialCoOrdinate: coordinate): number {
  return initialCoOrdinate.x + xIncrementerMap[initialCoOrdinate.facingDirection];
}

function getNewYIfValid(initialCoOrdinate: coordinate): number {
  return initialCoOrdinate.y + yIncrementerMap[initialCoOrdinate.facingDirection];
}

export { getRightSide, getLeftSide, getNewXIfValid, getNewYIfValid };
