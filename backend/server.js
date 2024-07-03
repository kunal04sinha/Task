import express from "express";
import { APP_Port, DB_URL } from "./config";
import router from "./Routes";
import mongoose from "mongoose";
import cors from "cors";

const app = express();

app.use(cors());
mongoose.connect(DB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  // useFindAndModify: false,
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error"));

db.once("open", () => {
  console.log("Connected to database");
});

app.use(express.json());
app.use("/v1/api", router);
app.listen(APP_Port, () => console.log(`Listing on port ${APP_Port}`));
