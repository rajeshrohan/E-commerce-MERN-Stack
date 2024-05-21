require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");

const server = express();
const productRouter = require("./routes/product");
const userRouter = require("./routes/user");

connectToDatabase();
async function connectToDatabase() {
  try {
    await mongoose.connect(process.env.MONGODB_LOCAL_URL);
    console.log("Connected to MongoDB Server");
  } catch (error) {
    console.log(error);
  }
}

// middleware
server.use(express.json());
server.use(morgan("dev"));
server.use(express.static("public"));

// Route handlers
server.use("/products", productRouter.router);
server.use("/users", userRouter.router);

server.listen(process.env.PORT, () => {
  console.log("server running on port 8080");
});
