const express = require("express");

// no other file name mentioned coz it defaults to whatever is there
require('./db');

const userRouter = require("./routes/user");

// require mongoose = require




const app = express();
app.use(express.json())
app.use("/api/user", userRouter);

app.post("/sign-in",
(req,res,next) => {     
  const {email,password}  = req.body
  if(!email || !password)
  return res.json({ error:"email/password missing"})        // Middle ware Function are middle ware functions
  next();// console.log(next);
},
 (req, res) => {
  res.send("<h1>Hello I am from </h1>");
});

app.listen(8000, () => {
  console.log("the port is listening on port 8000");
});