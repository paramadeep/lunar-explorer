import coOrdinate from "./coOrdinate";
import { performMotion } from "./motionOrcustrator";

function validateInputs(
  lunarSurfaceSize: [number, number],
  startingPosition: [number, number],
  startingDirection: string,
) {
  // throw new Error("Function not implemented.")
  // startingDirection Should just be one of S,E,W,N.  else throw error
  // commands Should just be comination of M,L,R. else throw error
  // lunarSurfaceSize should be in positive integers. else throw error
  // startingPosition shoudl be with in 0,0 and lunarSurfaceSize. else throw error
}

function explore(
  lunarSurfaceSize: [number, number],
  startingPosition: [number, number],
  startingDirection: string,
  commands: string,
): [number, number, string] {
  validateInputs(lunarSurfaceSize, startingPosition, startingDirection);
  var finalCoOrdinate: coOrdinate = {
    x: startingPosition[0],
    y: startingPosition[1],
    facingDirection: startingDirection,
  };
  for (const char of commands) {
    finalCoOrdinate = performMotion(finalCoOrdinate, char);
  }
  return [
    finalCoOrdinate.x,
    finalCoOrdinate.y,
    finalCoOrdinate.facingDirection,
  ];
}

export { explore };
