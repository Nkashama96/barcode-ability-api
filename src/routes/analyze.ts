import type { FastifyInstance } from "fastify";
import fs from "fs";
import path from "path";
import { generateAbilities } from "../logic/abilities.js";

const storagePath = path.resolve("src/storage/minted-hashes.json");

export async function analyzeRoute(app: FastifyInstance) {
  app.post("/analyze", async (req, reply) => {
    const { hash } = req.body as { hash: string };

    if (!hash || hash.length < 64) {
      return reply.status(400).send({ error: "Invalid hash" });
    }

    const store = JSON.parse(fs.readFileSync(storagePath, "utf8"));

    if (store.hashes.includes(hash)) {
      return { status: "duplicate" };
    }

    const ability = generateAbilities(hash);

    store.hashes.push(hash);
    fs.writeFileSync(storagePath, JSON.stringify(store, null, 2));

    return {
      status: "ok",
      ability
    };
  });
}
