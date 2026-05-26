import {
  getNewXIfValid,
  getNewYIfValid,
  getLeftSide,
  getRightSide,
} from "./basicMoves";
import coordinate from "./coordinate";

type abstractMotion = (
  initialCoOrdinate: coordinate,
  maxX: number,
  maxY: number,
) => coordinate;

var move: abstractMotion = (
  initialCoOrdinate: coordinate,
  maxX: number,
  maxY: number,
) => {
  return {
    x: getNewXIfValid(initialCoOrdinate, maxX),
    y: getNewYIfValid(initialCoOrdinate, maxY),
    facingDirection: initialCoOrdinate.facingDirection,
  };
};

var turnLeft: abstractMotion = (
  initialCoOrdinate: coordinate,
  maxX: number,
  maxY: number,
) => {
  return {
    x: initialCoOrdinate.x,
    y: initialCoOrdinate.y,
    facingDirection: getLeftSide(initialCoOrdinate.facingDirection),
  };
};

var turnRight: abstractMotion = (
  initialCoOrdinate: coordinate,
  maxX: number,
  maxY: number,
) => {
  return {
    x: initialCoOrdinate.x,
    y: initialCoOrdinate.y,
    facingDirection: getRightSide(initialCoOrdinate.facingDirection),
  };
};

export { turnLeft, turnRight, move, abstractMotion };
