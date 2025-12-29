import { hashToNumber } from "./deterministic.js";
import { selectRarity } from "./rarity.js";
const elements = [
    "fire",
    "water",
    "ground",
    "wood",
    "light",
    "dark",
    "gold"
];
export function generateAbilities(hash) {
    const rarity = selectRarity(hash);
    const element = elements[hashToNumber(hash.slice(16), elements.length)];
    const stat = (offset) => (parseInt(hash.slice(offset, offset + 4), 16) % 10) + 1;
    return {
        hash,
        rarity,
        element,
        stats: {
            hp: stat(20),
            attack: stat(24),
            defense: stat(28)
        }
    };
}
