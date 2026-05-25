import coOrdinate from "./coOrdinate"


function validateInputs(lunarSurfaceSize: [number, number], startingPosition: [number, number], startingDirection: string) {
  // throw new Error("Function not implemented.")
}



function explore(lunarSurfaceSize: [number, number], startingPosition: [number, number], startingDirection: string, commands: string): [number, number, string] {
  validateInputs(lunarSurfaceSize, startingPosition, startingDirection)
  var finalCoOrdinate: coOrdinate = {
    x: startingPosition[0],
    y: startingPosition[1],
    facingDirection: startingDirection
  }

  return [NaN, NaN, ""]
}

export {explore}


