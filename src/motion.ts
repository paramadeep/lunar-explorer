import {
  moveXIfFacingHorizontal,
  moveYIfFacingVertical,
  getLeftSide,
  getRightSide,
} from "./basicMoves";
import coordinate from "./coordinate";

type motionFunction = (
  initialCoOrdinate: coordinate,
  maxX: number,
  maxY: number,
) => coordinate;

const move: motionFunction = (
  initialCoOrdinate: coordinate,
  maxX: number,
  maxY: number,
) => {
  return {
    x: moveXIfFacingHorizontal(initialCoOrdinate, maxX),
    y: moveYIfFacingVertical(initialCoOrdinate, maxY),
    facingDirection: initialCoOrdinate.facingDirection,
  };
};

const turnLeft: motionFunction = (
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

const turnRight: motionFunction = (
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
