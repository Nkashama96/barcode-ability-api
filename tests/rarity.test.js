import { describe, it, expect } from "vitest";
import { selectRarity } from "../src/logic/rarity.js";
describe("selectRarity", () => {
    it("returns same rarity for same hash", () => {
        const hash = "b".repeat(128);
        const r1 = selectRarity(hash);
        const r2 = selectRarity(hash);
        expect(r1?.level).toBe(r2?.level);
    });
    it("returns valid rarity level", () => {
        const hash = "c".repeat(128);
        const rarity = selectRarity(hash);
        expect(rarity?.level).toMatch(/^L[1-7]$/);
        expect(Number(rarity?.chance.replace("%", ""))).toBeGreaterThan(0);
    });
});
