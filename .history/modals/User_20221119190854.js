// getting-started.js
const mongoose = require("mongoose");

// Schema for the documents that are going to be inside
// of my Users collectiom

const UserSchema = new mongoose.Schema(
  {
    username: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    passsword: { type: String, required: true },
  },
  { timestamps: true }
);
export default mongoose.model("User", UserSchema);
