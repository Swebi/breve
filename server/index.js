import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import shortUrl from "./src/routes/shortUrl.js";
import connectDb from "./src/config/dbConfig.js";

dotenv.config();
connectDb();

const port = process.env.PORT || 5001;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.options("*", cors());

app.use(cors());
app.use("/", shortUrl);

app.listen(port, () => {
  console.log(`Server started succesfully on port : ${port}`);
});
