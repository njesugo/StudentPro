import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import { router } from "./routes/students.route";

dotenv.config();

const hostname = "127.0.0.1";
const port = 5000;

mongoose.connect(
  `mongodb+srv://mr_jj:mr_jj@cluster0.gvie2ki.mongodb.net/eilco_web?retryWrites=true&w=majority&appName=Cluster0`
);

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
  console.log("Connected successfully");
});

const app = express();
app.use(express.json());
app.use(cors());


app.get("/", (req, res) => {
  res.send("Hello !");
});

app.use("/students", router);

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
