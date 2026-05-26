// facingDirection kept as `string` so callers/tests can pass literals like "S".
// Internal code narrows via toDirection() before using it as a Direction key.
export default interface coordinate {
  x: number;
  y: number;
  facingDirection: string;
}
