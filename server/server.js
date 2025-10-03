import express from "express";
import cors from "cors";
import { connectDb } from "./config/db.js";
import dotenv from "dotenv";
import employeRoute from "./routes/employeRoute.js";

dotenv.config();

const PORT = process.env.PORT || 5000;

const app = express();
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

connectDb();

app.use("/api", employeRoute);

app.listen(PORT, () => {
});
