import { describe, expect, it } from "@jest/globals";
import {
  getLeftSide,
  getNewXIfValid,
  getNewYIfValid,
  getRightSide,
} from "./basicMoves";
import { Direction } from "./direction";

const { N, S, E, W } = Direction;

describe("basicMoves", () => {
  describe("getRightSide", () => {
    it("when facing north give east", () => {
      expect(getRightSide(N)).toBe(E);
    });
    it("when facing east give south", () => {
      expect(getRightSide(E)).toBe(S);
    });
    it("when facing south give west", () => {
      expect(getRightSide(S)).toBe(W);
    });
    it("when facing west give north", () => {
      expect(getRightSide(W)).toBe(N);
    });
  });

  describe("getLeftSide", () => {
    it("when facing north give west", () => {
      expect(getLeftSide(N)).toBe(W);
    });
    it("when facing east give north", () => {
      expect(getLeftSide(E)).toBe(N);
    });
    it("when facing south give east", () => {
      expect(getLeftSide(S)).toBe(E);
    });
    it("when facing west give south", () => {
      expect(getLeftSide(W)).toBe(S);
    });
  });

  describe("getNewXIfValid", () => {
    it("when facing south, return same value", () => {
      expect(getNewXIfValid({ x: 1, y: 1, facingDirection: S }, 5)).toBe(1);
    });
    it("when facing north, return same value", () => {
      expect(getNewXIfValid({ x: 1, y: 1, facingDirection: N }, 5)).toBe(1);
    });
    it("when facing east, increment X", () => {
      expect(getNewXIfValid({ x: 1, y: 1, facingDirection: E }, 5)).toBe(2);
    });
    it("when facing west, decrement X", () => {
      expect(getNewXIfValid({ x: 1, y: 1, facingDirection: W }, 5)).toBe(0);
    });
    it("when goes beyond max X throw error", () => {
      expect(() =>
        getNewXIfValid({ x: 1, y: 1, facingDirection: E }, 1),
      ).toThrow(
        "The movement goes out of boundary of x min is 0, max is 1, starting is 1, ending is 2",
      );
    });
    it("when goes beyond 0 throw error", () => {
      expect(() =>
        getNewXIfValid({ x: 0, y: 1, facingDirection: W }, 1),
      ).toThrow(
        "The movement goes out of boundary of x min is 0, max is 1, starting is 0, ending is -1",
      );
    });
  });

  describe("getNewYIfValid", () => {
    it("when facing East, return same value", () => {
      expect(getNewYIfValid({ x: 1, y: 1, facingDirection: E }, 5)).toBe(1);
    });
    it("when facing West, return same value", () => {
      expect(getNewYIfValid({ x: 1, y: 1, facingDirection: W }, 5)).toBe(1);
    });
    it("when facing south, increment Y", () => {
      expect(getNewYIfValid({ x: 1, y: 1, facingDirection: S }, 5)).toBe(2);
    });
    it("when facing north, decrement Y", () => {
      expect(getNewYIfValid({ x: 1, y: 1, facingDirection: N }, 5)).toBe(0);
    });
    it("when goes beyond max Y throw error", () => {
      expect(() =>
        getNewYIfValid({ x: 1, y: 1, facingDirection: S }, 1),
      ).toThrow(
        "The movement goes out of boundary of y min is 0, max is 1, starting is 1, ending is 2",
      );
    });
    it("when goes beyond 0 throw error", () => {
      expect(() =>
        getNewYIfValid({ x: 1, y: 0, facingDirection: N }, 1),
      ).toThrow(
        "The movement goes out of boundary of y min is 0, max is 1, starting is 0, ending is -1",
      );
    });
  });
});
