require("dotenv").config();
const PORT = process.env.PORT;
const express = require("express");
const app = express();
const cors = require("cors");
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  return res.status(200).send("API RUNNING!");
});

const { userRouter } = require("./router");
app.use("/user", userRouter);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
