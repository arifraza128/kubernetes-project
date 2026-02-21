const express = require("express");
const proxy = require("express-http-proxy");

const app = express();

app.use("/auth", proxy("http://auth-service:4000"));
app.use("/patients", proxy("http://patient-service:5001"));
app.use("/doctors", proxy("http://doctor-service:5002"));
app.use("/appointments", proxy("http://appointment-service:5003"));

app.get("/health", (req,res)=>res.send("OK"));

app.listen(8080, () => console.log("API Gateway running"));
