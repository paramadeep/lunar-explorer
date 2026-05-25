import { getNewXIfValid, getNewYIfValid, getLeftSide, getRightSide } from "./basicMoves"
import coOrdinate from "./coOrdinate"

type performMotion = (initalCoOrdinate: coOrdinate) => coOrdinate

var move: performMotion = (initalCoOrdinate: coOrdinate) => { 
  var nextCoOrdinate: coOrdinate = {
    x: getNewXIfValid(initalCoOrdinate),
    y: getNewYIfValid(initalCoOrdinate),
    facingDirection: initalCoOrdinate.facingDirection
  }
  return initalCoOrdinate
}

var turnLeft: performMotion = (initalCoOrdinate: coOrdinate) => { 
  var nextCoOrdinate: coOrdinate = {
    x: initalCoOrdinate.x,
    y: initalCoOrdinate.y,
    facingDirection: getLeftSide(initalCoOrdinate.facingDirection)
  }
  return nextCoOrdinate
}

var turnRight: performMotion = (initalCoOrdinate: coOrdinate) => { 
  var nextCoOrdinate: coOrdinate = {
    x: initalCoOrdinate.x,
    y: initalCoOrdinate.y,
    facingDirection: getRightSide(initalCoOrdinate.facingDirection)
  }
  return nextCoOrdinate
}



export {
  turnLeft,
  turnRight,
  move
}

