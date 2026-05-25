import {describe, expect, it} from '@jest/globals';
import { getLeftSide, getNewXIfValid, getNewYIfValid, getRightSide } from './basicMoves';


describe("basicMoves", () => {
  describe("getRightSide", () => { 
    it("when facing north give east", ()=> { 
      expect(getRightSide("N")).toBe("E")
    })
    it("when facing east give south", ()=> { 
      expect(getRightSide("E")).toBe("S")
    })
    it("when facing south give west", ()=> { 
      expect(getRightSide("S")).toBe("W")
    })
    it("when facing west give north", ()=> { 
      expect(getRightSide("W")).toBe("N")
    })
  })

  describe("getLeftSide", () => { 
    it("when facing north give west", ()=> { 
      expect(getLeftSide("N")).toBe("W")
    })
    it("when facing east give north", ()=> { 
      expect(getLeftSide("E")).toBe("N")
    })
    it("when facing south give east", ()=> { 
      expect(getLeftSide("S")).toBe("E")
    })
    it("when facing west give south", ()=> { 
      expect(getLeftSide("W")).toBe("S")
    })
  })

  describe("getNewXIfValid", () => { 
    it("when facing south, return same value", () => { 
      expect(getNewXIfValid({ x: 1, y: 1, facingDirection: "S" }))
        .toMatchObject({ x: 1, y: 1, facingDirection: "S" })
    })
    it("when facing north, return same value", () => { 
      expect(getNewXIfValid({ x: 1, y: 1, facingDirection: "N" }))
        .toMatchObject({ x: 1, y: 1, facingDirection: "N" })
    })
    it("when facing east, increment X", () => { 
      expect(getNewXIfValid({ x: 1, y: 1, facingDirection: "E" }))
        .toMatchObject({ x: 2, y: 1, facingDirection: "E" })
    })
    it("when facing west, decrement X", () => { 
      expect(getNewXIfValid({ x: 1, y: 1, facingDirection: "W" }))
        .toMatchObject({ x: 0, y: 1, facingDirection: "W" })
    })
  })

  describe("getNewYIfValid", () => { 
    it("when facing East, return same value", () => { 
      expect(getNewYIfValid({ x: 1, y: 1, facingDirection: "E" }))
        .toMatchObject({ x: 1, y: 1, facingDirection: "E" })
    })
    it("when facing West, return same value", () => { 
      expect(getNewYIfValid({ x: 1, y: 1, facingDirection: "W" }))
        .toMatchObject({ x: 1, y: 1, facingDirection: "W" })
    })
    it("when facing south, increment Y", () => { 
      expect(getNewYIfValid({ x: 1, y: 1, facingDirection: "S" }))
        .toMatchObject({ x: 1, y: 2, facingDirection: "S" })
    })
    it("when facing north, decrement Y", () => { 
      expect(getNewYIfValid({ x: 1, y: 1, facingDirection: "N" }))
        .toMatchObject({ x: 1, y: 0, facingDirection: "N" })
    })
  })
  
    // it("facing south and moving in a straight line", () => {
    //     expect(explorer.explore([5, 5], [0, 0], "S", "MMMM")).toEqual([0, 4, "S"]);
    // });

    // it("rotating on the spot", () => {
    //     expect(explorer.explore([5, 5], [0, 0], "S", "RRRRRRR")).toEqual([0, 0, "E"]);
    // });

    // it("facing east and moving in a straight line", () => {
    //     expect(explorer.explore([5, 5], [0, 0], "E", "MMMM")).toEqual([4, 0, "E"]);
    // });

    // it("facing south with complex movement", () => {
    //     expect(explorer.explore([5, 5], [0, 0], "S", "MLMMMRMMRM")).toEqual([2, 3, "W"]);
    // });

    // it("facing south with complex movement not starting at the origin", () => {
    //     expect(explorer.explore([5, 5], [1, 1], "S", "MLMMMRMMRM")).toEqual([3, 4, "W"]);
    // });

    // it("facing north with complex movement", () => {
    //     expect(explorer.explore([5, 5], [0, 0], "N", "RMRMMMRMRM")).toEqual([0, 2, "N"]);
    // });
});
