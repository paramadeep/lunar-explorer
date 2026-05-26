import { getNewXIfValid, getNewYIfValid, getLeftSide, getRightSide } from "./basicMoves"
import coordinate from "./coordinate"

type abstractMotion = (initialCoOrdinate: coordinate) => coordinate

var move: abstractMotion = (initialCoOrdinate: coordinate) => { 
  return {
    x: getNewXIfValid(initialCoOrdinate),
    y: getNewYIfValid(initialCoOrdinate),
    facingDirection: initialCoOrdinate.facingDirection
  }
}

var turnLeft: abstractMotion = (initialCoOrdinate: coordinate) => { 
  return {
    x: initialCoOrdinate.x,
    y: initialCoOrdinate.y,
    facingDirection: getLeftSide(initialCoOrdinate.facingDirection)
  }
}

var turnRight: abstractMotion = (initialCoOrdinate: coordinate) => { 
  return {
    x: initialCoOrdinate.x,
    y: initialCoOrdinate.y,
    facingDirection: getRightSide(initialCoOrdinate.facingDirection)
  }
}

export {
  turnLeft,
  turnRight,
  move,
  abstractMotion
}

