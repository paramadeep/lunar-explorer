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

function isOutOfBoundary(actualValue: number, allowedMax: number) {
  return actualValue < 0 || actualValue > allowedMax;
}

function moveXIfFacingHorizontal(
  initialCoOrdinate: coordinate,
  maxX: number,
): number {
  const initX = initialCoOrdinate.x;
  const newX = initX + xIncrementerMap[initialCoOrdinate.facingDirection];
  if (isOutOfBoundary(newX, maxX)) {
    throw new Error(
      `The movement goes out of boundary of x min is 0, max is ${maxX}, starting is ${initX}, ending is ${newX}`,
    );
  }
  return newX;
}

function moveYIfFacingVertical(
  initialCoOrdinate: coordinate,
  maxY: number,
): number {
  const initY = initialCoOrdinate.y;
  const newY = initY + yIncrementerMap[initialCoOrdinate.facingDirection];
  if (isOutOfBoundary(newY, maxY)) {
    throw new Error(
      `The movement goes out of boundary of y min is 0, max is ${maxY}, starting is ${initY}, ending is ${newY}`,
    );
  }
  return newY;
}

export {
  getRightSide,
  getLeftSide,
  moveXIfFacingHorizontal,
  moveYIfFacingVertical,
};
