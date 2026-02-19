const express = require("express");
const mongoose = require("mongoose");

const app = express();
app.use(express.json());

mongoose.connect(process.env.MONGO_URI);

const Doctor = mongoose.model("Doctor", {
  name: String,
  specialty: String
});

app.post("/", async (req, res) => {
  const doctor = await Doctor.create(req.body);
  res.json(doctor);
});

app.get("/", async (req, res) => {
  const doctors = await Doctor.find();
  res.json(doctors);
});

app.get("/health", (req, res) => res.send("OK"));

app.listen(5002, () => console.log("Doctor Service running"));
