/// <reference path="./express.d.ts" />
import app from './app';
import compression from 'compression';
import { apiRateLimiter } from './middlewares/rateLimit';
import client from 'prom-client';

const PORT = process.env.PORT || 3000;
const register = new client.Registry();
client.collectDefaultMetrics({ register });

app.use(compression());

// Middleware global pour la limitation de débit
app.use(apiRateLimiter);

const httpRequestCounter = new client.Counter({
  name: 'http_requests_total',
  help: 'Total des requêtes HTTP',
  labelNames: ['method', 'status_code'],
});

register.registerMetric(httpRequestCounter);
app.use((req, res, next) => {
  res.on('finish', () => {
    httpRequestCounter.labels(req.method, res.statusCode.toString()).inc();
  });
  next();
});
app.get('/metrics', async (req, res) => {
  res.set('Content-Type', register.contentType);
  res.send(await register.metrics());
});

app.listen(PORT, () => {
  console.log(`API Gateway is running on port ${PORT}`);
});
