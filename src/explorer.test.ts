import { describe, expect, it } from "@jest/globals";
import * as explorer from "./explorer";

describe("explorer", () => {
  it("facing south and moving in a straight line", () => {
    expect(explorer.explore([5, 5], [0, 0], "S", "MMMM")).toEqual([0, 4, "S"]);
  });

  it("rotating on the spot", () => {
    expect(explorer.explore([5, 5], [0, 0], "S", "RRRRRRR")).toEqual([
      0,
      0,
      "E",
    ]);
  });

  it("facing east and moving in a straight line", () => {
    expect(explorer.explore([5, 5], [0, 0], "E", "MMMM")).toEqual([4, 0, "E"]);
  });

  it("facing south with complex movement", () => {
    expect(explorer.explore([5, 5], [0, 0], "S", "MLMMMRMMRM")).toEqual([
      2,
      3,
      "W",
    ]);
  });

  it("facing south with complex movement not starting at the origin", () => {
    expect(explorer.explore([5, 5], [1, 1], "S", "MLMMMRMMRM")).toEqual([
      3,
      4,
      "W",
    ]);
  });

  it("facing north with complex movement", () => {
    expect(explorer.explore([5, 5], [0, 0], "N", "RMRMMMRMRM")).toEqual([
      0,
      2,
      "N",
    ]);
  });
  it("throw error when goes beyond top boundary", () => {
    expect(() => explorer.explore([1, 1], [0, 0], "N", "MM")).toThrow(
      "The movement goes out of boundary of y min is 0, max is 1, starting is 0, ending is -1",
    );
  });
  it("throw error when goes beyond bottom boundary", () => {
    expect(() => explorer.explore([1, 1], [0, 0], "S", "MM")).toThrow(
      "The movement goes out of boundary of y min is 0, max is 1, starting is 1, ending is 2",
    );
  });
  it("throw error when goes beyond left boundary", () => {
    expect(() => explorer.explore([1, 1], [0, 0], "W", "MM")).toThrow(
      "The movement goes out of boundary of x min is 0, max is 1, starting is 0, ending is -1",
    );
  });
  it("throw error when goes beyond right boundary", () => {
    expect(() => explorer.explore([1, 1], [0, 0], "E", "MM")).toThrow(
      "The movement goes out of boundary of x min is 0, max is 1, starting is 1, ending is 2",
    );
  });
});
