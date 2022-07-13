const express = require("express");

require("dotenv").config();

const app = express();

const dbConnect = require("./config/db.config");

dbConnect();

app.use(express.json());

//Routers

const catRouter = require("./routes/questionarie.router");

app.use("/cat", catRouter);

app.listen(Number(process.env.PORT), () => {
  console.log(`Running on port ${process.env.PORT}`);
});
