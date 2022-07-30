import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import "express-async-errors";
import morgan from "morgan";

import { dirname } from "path";
import { fileURLToPath } from "url";
import path from "path";

//db and authentication routes
import connectDB from "./db/connect.js";
import authRouter from "./routes/authRoutes.js";
import jobRouter from "./routes/jobsRoutes.js";

const app = express();
dotenv.config();

//middleware
import notFoundMiddleware from "./middleware/not-found.js";
import errorMiddleware from "./middleware/errorMiddleware.js";
import authenticateUser from "./middleware/auth.js";

if (process.env.NODE_ENV !== "production") {
  app.use(morgan("dev"));
}

const __dirname = dirname(fileURLToPath(import.meta.url));

// only when ready to deploy
app.use(express.static(path.resolve(__dirname, "./client/build")));

app.use(cors());
app.use(express.json());
app.use(helmet());
app.use(xss());
app.use(mongoSanitize());

app.get("/", (req, res) => {
  res.json("welcome");
});
app.get("/api/v1", (req, res) => {
  res.json({ msg: "API" });
});

app.use("/api/v1/auth", authRouter);
app.use("/api/v1/jobs", authenticateUser, jobRouter);

// only when ready to deploy
app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./client/build", "index.html"));
});

app.use(notFoundMiddleware);
app.use(errorMiddleware);

const port = process.env.PORT;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    console.log("DB connected");
    app.listen(port, () => {
      console.log(`Server is running at Port ${port}`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
