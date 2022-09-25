const mongoose = require("mongoose");

// connecting to mongodb
const Project_4 = process.env.DB_URI
mongoose.connect(Project_4).then(
  () => {
    console.log("DB Ready To Use");
  },
  (err) => {
    console.log(err);
  }
);
