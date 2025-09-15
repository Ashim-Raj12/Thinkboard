import express from "express";
import dotenv from "dotenv";
import notesRoutes from "./src/routes/notesRoutes.js";
import connectDB from "./src/config/db.js";

dotenv.config();

const app = express();

connectDB();

app.use(express.json());

app.use("/api/notes", notesRoutes);

app.listen(process.env.PORT || 5000, () => {
  console.log(`Server is running on port ${process.env.PORT || 5000}`);
});
