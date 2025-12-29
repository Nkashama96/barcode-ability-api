import rarityTable from "../storage/rarity-table.json" assert { type: "json" };
import { hashToNumber } from "./deterministic.js";


export function selectRarity(hash: string) {
  const totalWeight = rarityTable.reduce(
    (sum, r) => sum + r.weight,
    0
  );

  const roll = hashToNumber(hash, totalWeight);

  let acc = 0;
  for (const r of rarityTable) {
    acc += r.weight;
    if (roll < acc) {
      return {
        ...r,
        chance: ((r.weight / totalWeight) * 100).toFixed(4) + "%"
      };
    }
  }
}
