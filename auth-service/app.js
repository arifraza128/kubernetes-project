const express = require("express");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

const app = express();
app.use(express.json());

mongoose.connect(process.env.MONGO_URI);

const User = mongoose.model("User", {
  email: String,
  password: String,
  role: String
});

app.post("/register", async (req,res)=>{
  const hash = await bcrypt.hash(req.body.password,10);
  const user = await User.create({...req.body,password:hash});
  res.json(user);
});

app.post("/login", async (req,res)=>{
  const user = await User.findOne({email:req.body.email});
  const valid = await bcrypt.compare(req.body.password,user.password);
  if(!valid) return res.status(401).send("Invalid");
  const token = jwt.sign({id:user._id},process.env.JWT_SECRET);
  res.json({token});
});

app.get("/health",(req,res)=>res.send("OK"));

app.listen(4000);
