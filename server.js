const express = require('express');
const compression = require('compression');
const path = require('path');

const app = express();

// Activate gzip compression
app.use(compression());

// Set the Cache-Control header for static files
app.use(express.static(path.join(__dirname, 'public'), {
  maxAge: '1y',
  setHeaders: (res, path) => {
    if (path.endsWith('.css') || path.endsWith('.js') || path.endsWith('.jpg') || path.endsWith('.png') ) {
      res.setHeader('Cache-Control', 'public, max-age=2592000, immutable');
    }
  }
}));

// Start the server
const PORT = 5500;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
