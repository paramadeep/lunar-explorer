import coordinate from "./coordinate";
const rightSideMap: Record<string, string> = {
  N: "E",
  E: "S",
  S: "W",
  W: "N",
};
const leftSideMap: Record<string, string> = {
  N: "W",
  E: "N",
  S: "E",
  W: "S",
};

const xIncrementerMap: Record<string, number> = {
  N: 0,
  S: 0,
  E: 1,
  W: -1,
};

const yIncrementerMap: Record<string, number> = {
  N: -1,
  S: 1,
  E: 0,
  W: 0,
};

function getRightSide(facingDirection: string): string {
  return rightSideMap[facingDirection];
}

function getLeftSide(facingDirection: string): string {
  return leftSideMap[facingDirection];
}

function getNewXIfValid(initialCoOrdinate: coordinate): number {
  const valueToIncrement = xIncrementerMap[initialCoOrdinate.facingDirection];
  return initialCoOrdinate.x + valueToIncrement;
}

function getNewYIfValid(initialCoOrdinate: coordinate): number {
  const valueToIncrement = yIncrementerMap[initialCoOrdinate.facingDirection];
  return initialCoOrdinate.y + valueToIncrement;
}

export { getRightSide, getLeftSide, getNewXIfValid, getNewYIfValid };
