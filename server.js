import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRoute from "./routes/user.js";
import conversationRoute from "./routes/conversation.js";
import gigRoute from "./routes/gig.js";
import messageRoute from "./routes/message.js";
import orderRoute from "./routes/order.js";
import authRoute from "./routes/auth.js";
import reviewRoute from "./routes/review.js";
import { dirname } from "path";
import path from "path";
import { fileURLToPath } from "url";

import cookieParser from "cookie-parser";
import cors from "cors";

const app = express();
dotenv.config();

const __dirname = dirname(fileURLToPath(import.meta.url));

app.use(express.static(path.resolve(__dirname, "./public")));

// app.use(cors({ origin: "http://127.0.0.1:5173", credentials: true }));
app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/gigs", gigRoute);
app.use("/api/reviews", reviewRoute);
app.use("/api/orders", orderRoute);

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./public", "index.html"));
});

app.use((err, req, res, next) => {
  const errorStatus = err.status || 500;
  const errorMessage = err.message || "Something went wrong!";

  return res.status(errorStatus).json(errorMessage);
});

try {
  await mongoose.connect(process.env.MONGO_URL);
  console.log("connected to DB");
} catch (error) {
  console.log(error);
}

app.listen(5000, () => {
  console.log("Server connected");
});
