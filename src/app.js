const express = require("express");
const app = express();
const authRoutes = require("./routes/authRoutes");
const userRoutes = require("./routes/userRoutes");
const authMiddleware = require("./middleware/authMiddleware");
const bodyParser = require("body-parser");

app.use(bodyParser.json());
require("dotenv").config();

app.use("/auth", authRoutes);
app.use("/users", authMiddleware, userRoutes);

const PORT = process.env.PORT || 3002;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
