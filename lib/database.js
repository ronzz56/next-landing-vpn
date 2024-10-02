const config = require("../config")
const mongoose = require("mongoose")

exports.connectMongoDB = async () => {
  try {
    await mongoose.connect(config.mongoURL);
    const mongo = mongoose.connection;
    mongo.on("error", console.error.bind(console, "Connection error:"));
    mongo.once("open", () => {
      console.log("</> Success connected to MongoDB");
    });
  } catch (error) {
    console.log("Error connecting to MongoDB: ", error);
  }
};

const data = mongoose.Schema({
  googleId: { type: String },
  username: { type: String },
  name: { type: String },
  email: { type: String },
  apikey: { type: String },
  limit: { type: Number },
  profile: { type: String },
  isAdmin: { type: Boolean },
  standard: { type: Boolean },
  standardTime: { type: Number },
  premium: { type: Boolean },
  premiumTime: { type: Number },
  defaultKey: { type: String }
});

exports.db = mongoose.model("user", data);
