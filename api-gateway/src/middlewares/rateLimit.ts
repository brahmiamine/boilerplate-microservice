import rateLimit from 'express-rate-limit';

// Configuration de la limitation de débit
export const apiRateLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // Période de 15 minutes
  max: 100, // Limite : 100 requêtes par période
  message: {
    message: 'Too many requests from this IP, please try again after 15 minutes.',
  },
  standardHeaders: true, // Retourne les headers `RateLimit-*`
  legacyHeaders: false, // Désactive les headers obsolètes `X-*`
});
