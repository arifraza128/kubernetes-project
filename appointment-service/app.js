const express = require("express");
const mongoose = require("mongoose");

const app = express();
app.use(express.json());

mongoose.connect(process.env.MONGO_URI);

const Appointment = mongoose.model("Appointment", {
  patientId: String,
  doctorId: String,
  date: String
});

app.post("/", async (req, res) => {
  const appointment = await Appointment.create(req.body);
  res.json(appointment);
});

app.get("/", async (req, res) => {
  const appointments = await Appointment.find();
  res.json(appointments);
});

app.get("/health", (req, res) => res.send("OK"));

app.listen(5003, () => console.log("Appointment Service running"));

