const express = require('express');
const app = express();
const port = 3000; // Explicitly setting port to 3000

// Middleware to parse JSON requests
app.use(express.json());

// Health check route
app.get('/health', (req, res) => {
  res.json({ status: 'healthy' });
});

// Example API endpoint
app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hello, World!' });
});

// Another API endpoint
app.get('/api/newapi', (req, res) => {
  res.json({ message: 'New Hello, World!' });
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
