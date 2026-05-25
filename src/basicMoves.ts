import coOrdinate from "./coOrdinate"

function getRightSide(facingDirection: string): string {
  const rightSideMap: Record<string, string> = {
    "N":"E",
    "E":"S",
    "S":"W",
    "W":"N",
  }
  return rightSideMap[facingDirection]
}

function getLeftSide(facingDirection: string): string {
  const leftSideMap: Record<string, string> = {
    "N":"W",
    "E":"N",
    "S":"E",
    "W":"S",
  }
  return leftSideMap[facingDirection]
}

function getNewXIfValid(initalCoOrdinate: coOrdinate): coOrdinate {
  var xIncrementerMap: Record<string, number> = {
    "N":0,
    "S":0,
    "E":1,
    "W":-1,
  }
  var returnCoOrdinate = { ...initalCoOrdinate }
  const valueToIncrement = xIncrementerMap[initalCoOrdinate.facingDirection]  
  returnCoOrdinate.x = returnCoOrdinate.x+valueToIncrement
  return returnCoOrdinate
}

function getNewYIfValid(initalCoOrdinate: coOrdinate): coOrdinate {
  var yIncrementerMap: Record<string, number> = {
    "N":-1,
    "S":1,
    "E":0,
    "W":0,
  }
  var returnCoOrdinate = { ...initalCoOrdinate }
  const valueToIncrement = yIncrementerMap[initalCoOrdinate.facingDirection]  
  returnCoOrdinate.y = returnCoOrdinate.y+valueToIncrement
  return returnCoOrdinate
}

export {
  getRightSide,
  getLeftSide,
  getNewXIfValid,
  getNewYIfValid
}