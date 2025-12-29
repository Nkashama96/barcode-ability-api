import { describe, it, expect } from "vitest";
import { hashToNumber } from "../src/logic/deterministic.js";

describe("hashToNumber", () => {
  it("returns deterministic number for same hash", () => {
    const hash = "a".repeat(128);
    expect(hashToNumber(hash, 1000)).toBe(
      hashToNumber(hash, 1000)
    );
  });

  it("respects modulo", () => {
    const hash = "f".repeat(128);
    const value = hashToNumber(hash, 10);
    expect(value).toBeGreaterThanOrEqual(0);
    expect(value).toBeLessThan(10);
  });
});
