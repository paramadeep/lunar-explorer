import {
  getNewXIfValid,
  getNewYIfValid,
  getLeftSide,
  getRightSide,
} from "./basicMoves";
import coordinate from "./coordinate";

type motionFunction = (
  initialCoOrdinate: coordinate,
  maxX: number,
  maxY: number,
) => coordinate;

var move: motionFunction = (
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

var turnLeft: motionFunction = (
  initialCoOrdinate: coordinate,
  _maxX: number,
  _maxY: number,
) => {
  return {
    x: initialCoOrdinate.x,
    y: initialCoOrdinate.y,
    facingDirection: getLeftSide(initialCoOrdinate.facingDirection),
  };
};

var turnRight: motionFunction = (
  initialCoOrdinate: coordinate,
  _maxX: number,
  _maxY: number,
) => {
  return {
    x: initialCoOrdinate.x,
    y: initialCoOrdinate.y,
    facingDirection: getRightSide(initialCoOrdinate.facingDirection),
  };
};

export { turnLeft, turnRight, move, motionFunction as abstractMotion };
