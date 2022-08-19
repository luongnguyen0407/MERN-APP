const express = require("express");
const authRouter = require("./routes/auth");
const postRouter = require("./routes/post");
const connectDB = require("./connect/connectDB");
require("dotenv").config();

connectDB();
const app = express();
const PORT = process.env.PORT || 4567;

app.use(express.json());
app.use("/api/v1/auth", authRouter);
app.use("/api/v1/post", postRouter);
app.listen(PORT, () => {
  console.log(`server started on port ${PORT}`);
});
