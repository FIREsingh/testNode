// app.js
import express from "express";

const app = express();
const PORT = 3000;

// Middleware
app.use(express.json());

// Routes
app.get("/", (req, res) => {
  res.json({ message: "Hello from Express ES6 app 🚀" });
});

app.get("/health", (req, res) => {
  res.send("OK");
});

app.post("/echo", (req, res) => {
  res.json({
    received: req.body,
  });
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({ error: "Route not found" });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running at => http://localhost:${PORT}`);
});
