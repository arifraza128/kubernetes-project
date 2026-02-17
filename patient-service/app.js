const express = require("express");
const mongoose = require("mongoose");

const app = express();
app.use(express.json());

mongoose.connect(process.env.MONGO_URI);

const Patient = mongoose.model("Patient", {
  name: String,
  age: Number,
  condition: String
});

app.post("/", async (req, res) => {
  const patient = await Patient.create(req.body);
  res.json(patient);
});

app.get("/", async (req, res) => {
  const patients = await Patient.find();
  res.json(patients);
});

app.get("/health", (req, res) => res.send("OK"));

app.listen(5001, () => console.log("Patient Service running"));
