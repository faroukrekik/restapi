const express = require("express");
const connect = require("./config/connectDB");
const User = require("./modales/User");
require("dotenv").config({ path: "./config/.env" });
const app = express();

app.use(express.json());
connect();

app.post("/Add", async (req, res) => {
  const { fullName, phone, email } = req.body;
  try {
    const newPerson = new User({
      fullName,
      email,
      phone,
    });
    await newPerson.save();
    res.send(newPerson);
  } catch (error) {
    console.log(error);
  }
});

app.get("/get", async (req, res) => {
  try {
    const allPerson = await User.find();
    res.send(allPerson);
  } catch (error) {
    console.log(error);
  }
});

app.get("/get/:id", async (req, res) => {
  try {
    const specifcperson = await User.findById(req.params.id);
    res.send(specifcperson);
  } catch (error) {
    console.log(error);
  }
});

app.put("/update/:id", async (req, res) => {
  try {
    const editPerson = await User.findByIdAndUpdate(req.params.id, {
      ...req.body,
    });
    res.send(editPerson);
  } catch (error) {
    console.log(error);
  }
});

PORT = process.env.PORT || 5000;

app.listen(PORT, (err) =>
  err ? console.error(err) : console.log(`server running on port ${PORT}`)
);
