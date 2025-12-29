import { describe, it, expect } from "vitest";
import { generateAbilities } from "../src/logic/abilities.js";

describe("generateAbilities", () => {
  const hash = "d".repeat(128);

  it("is deterministic for same hash", () => {
    const a1 = generateAbilities(hash);
    const a2 = generateAbilities(hash);

    expect(a1).toEqual(a2);
  });

  it("generates valid stats range", () => {
    const ability = generateAbilities(hash);

    expect(ability.stats.hp).toBeGreaterThanOrEqual(1);
    expect(ability.stats.hp).toBeLessThanOrEqual(10);

    expect(ability.stats.attack).toBeGreaterThanOrEqual(1);
    expect(ability.stats.attack).toBeLessThanOrEqual(10);

    expect(ability.stats.defense).toBeGreaterThanOrEqual(1);
    expect(ability.stats.defense).toBeLessThanOrEqual(10);
  });

  it("assigns a valid element", () => {
    const ability = generateAbilities(hash);
    expect([
      "fire",
      "water",
      "ground",
      "wood",
      "light",
      "dark",
      "gold"
    ]).toContain(ability.element);
  });
});
