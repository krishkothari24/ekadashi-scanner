import express from 'express';
import cors from 'cors';        // ← import CORS

const app = express();
const PORT = process.env.PORT || 4000;

// 1) Enable CORS for our frontend origin
app.use(cors({
  origin: 'http://localhost:5173',  // allow Vite dev server
  methods: ['GET','POST','PUT','DELETE'], 
  credentials: true                 // if we ever use cookies/auth
}));

// 2) JSON middleware
app.use(express.json());

// Health-check endpoint
app.get('/health', (_req, res) => {
  res.json({ status: 'OK', timestamp: Date.now() });
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
