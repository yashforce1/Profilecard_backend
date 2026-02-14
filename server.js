require("dotenv").config();
const express = require("express");

const app = express();
app.use(express.json());

const userRoutes = require("./routes/userRoutes");


// practice
app.get("/", (req, res) => {
  res.status(200).send("Server is running 🚀");
});





app.use("/", userRoutes);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

