const express = require("express");
const user = require("../Schema/userSchema");

const router = express.Router();

try {
  router.post("/Signup", async (req, res) => {
    const name = req.body.name;
    const email = req.body.email;
    const password = req.body.password;
    const con_pass = req.body.con_pass;
    const contact = req.body.contact;
    const location = req.body.location;

    const preuser = await user.findOne({ email: email });

    if (!preuser) {
      const adUser = new user({
        name: name,
        email: email,
        password: password,
        con_pass: con_pass,
        contact: contact,
        location: location,
      });
      await adUser.save();
      res.send({ Message: "Signup Successful" });
    } else {
      res.send({ Message: "Username already Exist" });
    }
  });
} catch (error) {
  res.send(error);
}

try {
  router.post("/Login", async (req, res) => {
    const email = req.body.email;
    const password = req.body.password;

    const preuser = await user.findOne({ email: email, password: password });

    if (preuser) {
      res.status(201).send({ Message: "Login Successful", preuser });
    } else {
      res.send({ Message: "User Not Found" });
    }
  });
} catch (error) {
  res.send(error);
}

module.exports = router;
