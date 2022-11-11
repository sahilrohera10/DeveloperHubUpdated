const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const PORT = process.env.PORT || 3301;

const cors = require("cors");

dotenv.config();

mongoose
  .connect(process.env.MONGO_URI, {})
  .then(() => console.log("Database connected!"))
  .catch((err) => console.log(err));

app.use(express.json());
app.use(cors());

app.use(express.urlencoded({ extended: false }));

const Routes = require("./Routes/userRoutes");
app.use("/", Routes);

app.listen(PORT, () => {
  console.log("server started and running on port 3301");
});
