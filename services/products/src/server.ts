import { createApp } from "./app";
import { connectDB } from "./config/db.config";

const PORT = process.env.PORT || 5000;

const startServer = async () => {
  try {
    // Connexion à MongoDB
    await connectDB();

    // Création de l'application Express
    const app = createApp();

    // Démarrage du serveur
    app.listen(PORT, () =>
      console.log(`Server is running on http://localhost:${PORT}`)
    );
  } catch (error) {
    console.error("Error starting server:", error);
    process.exit(1);
  }
};

startServer();
