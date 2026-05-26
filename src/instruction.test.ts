import { describe, expect, it } from "@jest/globals";
import { Instruction, toInstruction } from "./instruction";

describe("instruction", () => {
  describe("toInstruction", () => {
    it("returns Instruction.M for 'M'", () => {
      expect(toInstruction("M")).toBe(Instruction.M);
    });
    it("returns Instruction.L for 'L'", () => {
      expect(toInstruction("L")).toBe(Instruction.L);
    });
    it("returns Instruction.R for 'R'", () => {
      expect(toInstruction("R")).toBe(Instruction.R);
    });

    it("throws on unknown instruction", () => {
      expect(() => toInstruction("X")).toThrow("Invalid instruction: X");
    });
    it("throws on empty string", () => {
      expect(() => toInstruction("")).toThrow("Invalid instruction: ");
    });
    it("throws on lowercase valid letter", () => {
      expect(() => toInstruction("m")).toThrow("Invalid instruction: m");
    });
  });
});
