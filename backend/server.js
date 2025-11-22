import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import productRoutes from "./routes/product.route.js";
import path from "path";
import { fileURLToPath } from "url";

dotenv.config();

const PORT = process.env.PORT || 5000;

const app = express();

// Fix __dirname in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// JSON middleware
app.use(express.json());

// API routes
app.use("/api/products", productRoutes);

// Serve React frontend in production
if (process.env.NODE_ENV === "production") {
    const frontendPath = path.join(__dirname, "../frontend/dist");
    app.use(express.static(frontendPath));

    // Catch-all route for React
    app.get("/*", (req, res) => {
        res.sendFile(path.join(frontendPath, "index.html"));
    });
}

app.listen(PORT, () => {
    connectDB();
    console.log(`Server started at port ${PORT}`);
});
