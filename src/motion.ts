import { getNewXIfValid, getNewYIfValid, getLeftSide, getRightSide } from "./basicMoves"
import coOrdinate from "./coOrdinate"

type abstractMotion = (initialCoOrdinate: coOrdinate) => coOrdinate

var move: abstractMotion = (initialCoOrdinate: coOrdinate) => { 
  return {
    x: getNewXIfValid(initialCoOrdinate),
    y: getNewYIfValid(initialCoOrdinate),
    facingDirection: initialCoOrdinate.facingDirection
  }
}

var turnLeft: abstractMotion = (initialCoOrdinate: coOrdinate) => { 
  return {
    x: initialCoOrdinate.x,
    y: initialCoOrdinate.y,
    facingDirection: getLeftSide(initialCoOrdinate.facingDirection)
  }
}

var turnRight: abstractMotion = (initialCoOrdinate: coOrdinate) => { 
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

