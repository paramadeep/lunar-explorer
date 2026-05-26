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

function getNewXIfValid(initialCoOrdinate: coOrdinate): number {
  var xIncrementerMap: Record<string, number> = {
    "N":0,
    "S":0,
    "E":1,
    "W":-1,
  }
  const valueToIncrement = xIncrementerMap[initialCoOrdinate.facingDirection]  
  return initialCoOrdinate.x+valueToIncrement
}

function getNewYIfValid(initialCoOrdinate: coOrdinate): number {
  var yIncrementerMap: Record<string, number> = {
    "N":-1,
    "S":1,
    "E":0,
    "W":0,
  }
  const valueToIncrement = yIncrementerMap[initialCoOrdinate.facingDirection]  
  return initialCoOrdinate.y+valueToIncrement
}

export {
  getRightSide,
  getLeftSide,
  getNewXIfValid,
  getNewYIfValid
}