/// <reference path="./express.d.ts" />
import { app } from "./app";
import { connectDb } from "./infra/db";

const PORT = process.env.PORT || 3000;

const startServer = async () => {
  await connectDb(); // Initialise la connexion à TypeORM
  app.listen(PORT, () => {
    console.log(`🚀 Server is running on http://localhost:${PORT}`);
  });
};

startServer().catch((error) => {
  console.error("❌ Error starting the server:", error.message);
  process.exit(1);
});
