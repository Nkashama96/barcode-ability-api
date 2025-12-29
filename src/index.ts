import Fastify from "fastify";
import cors from "@fastify/cors";
import { analyzeRoute } from "./routes/analyze.js";

const app = Fastify({ logger: true });

await app.register(cors);
await analyzeRoute(app);

app.listen({ port: 3001 }, () => {
  console.log("🚀 Ability API running at http://localhost:3001");
});
