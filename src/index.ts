import Fastify from "fastify";
import cors from "@fastify/cors";
import { analyzeRoute } from "./routes/analyze.js";

const app = Fastify({ logger: true });

await app.register(cors);
await analyzeRoute(app);

const PORT = Number(process.env.PORT) || 3001;

app.listen(
  { port: PORT, host: "0.0.0.0" },
  () => {
    console.log(`🚀 Ability API running on port ${PORT}`);
  }
);


