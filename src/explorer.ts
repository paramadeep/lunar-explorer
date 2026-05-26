import coordinate from "./coordinate";
import { toDirection } from "./direction";
import { toInstruction } from "./instruction";
import { performMotion } from "./motionOrchestrator";
import { validateInputs } from "./validateInputs";

function explore(
  lunarSurfaceSize: [number, number],
  startingPosition: [number, number],
  startingDirection: string,
  commands: string,
): [number, number, string] {
  // validateInputs(lunarSurfaceSize, startingPosition, startingDirection);
  const initialCoOrdinate: coordinate = {
    x: startingPosition[0],
    y: startingPosition[1],
    facingDirection: toDirection(startingDirection),
  };

  const [maxX, maxY] = [...lunarSurfaceSize];

  const finalCoOrdinate = [...commands].reduce(
    (coord, char) => performMotion(coord, toInstruction(char), maxX, maxY),
    initialCoOrdinate,
  );

  return [
    finalCoOrdinate.x,
    finalCoOrdinate.y,
    finalCoOrdinate.facingDirection,
  ];
}

export { explore };
