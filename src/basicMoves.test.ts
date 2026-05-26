import { describe, expect, it } from "@jest/globals";
import {
  getLeftSide,
  getNewXIfValid,
  getNewYIfValid,
  getRightSide,
} from "./basicMoves";

describe("basicMoves", () => {
  describe("getRightSide", () => {
    it("when facing north give east", () => {
      expect(getRightSide("N")).toBe("E");
    });
    it("when facing east give south", () => {
      expect(getRightSide("E")).toBe("S");
    });
    it("when facing south give west", () => {
      expect(getRightSide("S")).toBe("W");
    });
    it("when facing west give north", () => {
      expect(getRightSide("W")).toBe("N");
    });
  });

  describe("getLeftSide", () => {
    it("when facing north give west", () => {
      expect(getLeftSide("N")).toBe("W");
    });
    it("when facing east give north", () => {
      expect(getLeftSide("E")).toBe("N");
    });
    it("when facing south give east", () => {
      expect(getLeftSide("S")).toBe("E");
    });
    it("when facing west give south", () => {
      expect(getLeftSide("W")).toBe("S");
    });
  });

  describe("getNewXIfValid", () => {
    it("when facing south, return same value", () => {
      expect(getNewXIfValid({ x: 1, y: 1, facingDirection: "S" })).toBe(1);
    });
    it("when facing north, return same value", () => {
      expect(getNewXIfValid({ x: 1, y: 1, facingDirection: "N" })).toBe(1);
    });
    it("when facing east, increment X", () => {
      expect(getNewXIfValid({ x: 1, y: 1, facingDirection: "E" })).toBe(2);
    });
    it("when facing west, decrement X", () => {
      expect(getNewXIfValid({ x: 1, y: 1, facingDirection: "W" })).toBe(0);
    });
  });

  describe("getNewYIfValid", () => {
    it("when facing East, return same value", () => {
      expect(getNewYIfValid({ x: 1, y: 1, facingDirection: "E" })).toBe(1);
    });
    it("when facing West, return same value", () => {
      expect(getNewYIfValid({ x: 1, y: 1, facingDirection: "W" })).toBe(1);
    });
    it("when facing south, increment Y", () => {
      expect(getNewYIfValid({ x: 1, y: 1, facingDirection: "S" })).toBe(2);
    });
    it("when facing north, decrement Y", () => {
      expect(getNewYIfValid({ x: 1, y: 1, facingDirection: "N" })).toBe(0);
    });
  });
});
