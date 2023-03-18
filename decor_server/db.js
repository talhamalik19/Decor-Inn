const mongoose =require("mongoose");

mongoose.connect(
    "mongodb://localhost:27017/china_mart",
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => {
    console.log("Connected Successfully through mongoose");
  })
  .catch((error) => {
    console.log(error.message);
  });

module.exports = mongoose
