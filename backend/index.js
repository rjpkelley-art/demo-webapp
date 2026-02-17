const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

/**
 * Health check endpoint
 * Used by load balancers and Kubernetes liveness/readiness probes
 */
app.get('/healthz', (req, res) => {
  res.status(200).json({
    status: 'ok',
    uptime: process.uptime(),
    timestamp: new Date().toISOString()
  });
});

app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hello from demo-webapp backend' });
});

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '..', 'frontend', 'build')));

  app.get('*', (req, res) => {
    res.sendFile(
      path.join(__dirname, '..', 'frontend', 'build', 'index.html')
    );
  });
}

app.listen(PORT, () => {
  console.log(`demo-webapp backend listening on ${PORT}`);
});
