import "reflect-metadata"; // Nécessaire pour TypeORM
import { AppDataSource } from "../config/ormconfig";

export const connectDb = async () => {
  try {
    await AppDataSource.initialize();
    console.log("✅ Database connected successfully with TypeORM!");
  } catch (error) {
    console.error("❌ Failed to connect to the database:", (error as Error).message);
    process.exit(1); // Arrête l'application si la base de données n'est pas accessible
  }
};
