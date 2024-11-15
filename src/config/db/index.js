const mongoose = require("mongoose");

const connect = async () => {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/f8_education_fev");
    console.log("connect successfully");
  } catch (err) {
    console.log(err);
  }
};

module.exports = { connect };
