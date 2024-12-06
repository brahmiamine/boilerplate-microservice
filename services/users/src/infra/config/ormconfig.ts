import { DataSource } from "typeorm";
import dotenv from "dotenv";
dotenv.config();

export const AppDataSource = new DataSource({
  type: "postgres",
  url: process.env.DATABASE_URL, // Récupère l'URL depuis le fichier .env
  synchronize: true, // À mettre sur `false` en production
  logging: false,
  entities: ["src/infra/db/entities/**/*.ts"], // Dossier contenant les entités
  migrations: ["src/infra/db/migrations/**/*.ts"], // Dossier contenant les migrations
  subscribers: ["src/infra/db/subscribers/**/*.ts"], // Dossier contenant les subscribers (si utilisés)
});
