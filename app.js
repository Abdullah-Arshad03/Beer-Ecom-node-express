const express = require("express");
const bodyParse = require("body-parser");
const productRoutes = require("./routes/productRoutes");

const app = express();

app.use(bodyParse.json());

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Credentials", "true");

  res.setHeader(
    "Access-Control-Allow-Methods",
    "OPTIONS, GET, POST, PUT, PATCH, DELETE"
  );
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});
app.use("/api", productRoutes);

app.use((error, req, res, next) => {
  const status = error.statusCode || 500;
  const errorMessage = error.message;

  res.status(status).json({
    message: errorMessage,
    statusCode: status,
  });
});
app.listen(3000, () => {
  console.log("app running on the port 3000");
});
