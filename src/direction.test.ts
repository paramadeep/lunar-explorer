import { describe, expect, it } from "@jest/globals";
import { Direction, toDirection } from "./direction";

describe("direction", () => {
  describe("toDirection", () => {
    it("returns Direction.N for 'N'", () => {
      expect(toDirection("N")).toBe(Direction.N);
    });
    it("returns Direction.S for 'S'", () => {
      expect(toDirection("S")).toBe(Direction.S);
    });
    it("returns Direction.E for 'E'", () => {
      expect(toDirection("E")).toBe(Direction.E);
    });
    it("returns Direction.W for 'W'", () => {
      expect(toDirection("W")).toBe(Direction.W);
    });

    it("throws on unknown direction", () => {
      expect(() => toDirection("X")).toThrow("Invalid direction: X");
    });
    it("throws on empty string", () => {
      expect(() => toDirection("")).toThrow("Invalid direction: ");
    });
    it("throws on lowercase valid letter", () => {
      expect(() => toDirection("n")).toThrow("Invalid direction: n");
    });
  });
});
