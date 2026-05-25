import { getNewXIfValid, getNewYIfValid, getLeftSide, getRightSide } from "./basicMoves"
import coOrdinate from "./coOrdinate"

type abstractMotion = (initalCoOrdinate: coOrdinate) => coOrdinate

var move: abstractMotion = (initalCoOrdinate: coOrdinate) => { 
  return {
    x: getNewXIfValid(initalCoOrdinate),
    y: getNewYIfValid(initalCoOrdinate),
    facingDirection: initalCoOrdinate.facingDirection
  }
}

var turnLeft: abstractMotion = (initalCoOrdinate: coOrdinate) => { 
  return {
    x: initalCoOrdinate.x,
    y: initalCoOrdinate.y,
    facingDirection: getLeftSide(initalCoOrdinate.facingDirection)
  }
}

var turnRight: abstractMotion = (initalCoOrdinate: coOrdinate) => { 
  return {
    x: initalCoOrdinate.x,
    y: initalCoOrdinate.y,
    facingDirection: getRightSide(initalCoOrdinate.facingDirection)
  }
}

export {
  turnLeft,
  turnRight,
  move,
  abstractMotion
}

