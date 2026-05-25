import { describe, expect, it } from "@jest/globals";
import { performMotion } from "./motionOrcustrator";

describe("motionOrcustrator", () => {
  describe("move", () => {
    it("just up when facing north", () => {
      expect(
        performMotion({ x: 1, y: 1, facingDirection: "N" }, "M"),
      ).toMatchObject({ x: 1, y: 0, facingDirection: "N" });
    });
    it("just down when facing south", () => {
      expect(
        performMotion({ x: 1, y: 1, facingDirection: "S" }, "M"),
      ).toMatchObject({ x: 1, y: 2, facingDirection: "S" });
    });

    it("just right when facing east", () => {
      expect(
        performMotion({ x: 1, y: 1, facingDirection: "E" }, "M"),
      ).toMatchObject({ x: 2, y: 1, facingDirection: "E" });
    });
    it("just left when facing west", () => {
      expect(
        performMotion({ x: 1, y: 1, facingDirection: "W" }, "M"),
      ).toMatchObject({ x: 0, y: 1, facingDirection: "W" });
    });
  });

  describe("turnLeft", () => {
    it("just change direction to left side", () => {
      expect(
        performMotion({ x: 1, y: 1, facingDirection: "N" }, "L"),
      ).toMatchObject({ x: 1, y: 1, facingDirection: "W" });
    });
  });

  describe("turnRight", () => {
    it("just change direction to right side", () => {
      expect(
        performMotion({ x: 1, y: 1, facingDirection: "N" }, "R"),
      ).toMatchObject({ x: 1, y: 1, facingDirection: "E" });
    });
  });

  // describe("getNewYIfValid", () => {
  //   it("when facing East, return same value", () => {
  //     expect(getNewYIfValid({ x: 1, y: 1, facingDirection: "E" }))
  //       .toBe(1)
  //   })
  //   it("when facing West, return same value", () => {
  //     expect(getNewYIfValid({ x: 1, y: 1, facingDirection: "W" }))
  //       .toBe(1)
  //   })
  //   it("when facing south, increment Y", () => {
  //     expect(getNewYIfValid({ x: 1, y: 1, facingDirection: "S" }))
  //       .toBe(2)
  //   })
  //   it("when facing north, decrement Y", () => {
  //     expect(getNewYIfValid({ x: 1, y: 1, facingDirection: "N" }))
  //       .toBe(0)
  //   })
  // })
});
